"""Read-only assertions against a running local/preview build. Never submits forms."""
import json, urllib.request, urllib.error, urllib.parse, xml.etree.ElementTree as ET
from html.parser import HTMLParser
import sys

base = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:3100'
canonical_base = 'https://www.mynzocarbon.com'

class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.canonical=[]; self.meta={}; self.links=[]; self.schemas=[]; self.collect=False; self.buffer=''; self.text=[]; self.h1_count=0
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a['href'])
        if tag=='meta': self.meta[a.get('name',a.get('property'))]=a.get('content')
        if tag=='a': self.links.append(a.get('href',''))
        if tag=='h1': self.h1_count+=1
        if tag=='script' and a.get('type')=='application/ld+json': self.collect=True; self.buffer=''
    def handle_data(self,data):
        if self.collect:self.buffer+=data
        else:self.text.append(data)
    def handle_endtag(self,tag):
        if tag=='script' and self.collect:self.schemas.append(json.loads(self.buffer));self.collect=False

def fetch(path):
    try: response=urllib.request.urlopen(base+path,timeout=35)
    except urllib.error.HTTPError as error:response=error
    return response.status,response.read().decode(),dict(response.headers)

status,xml,_=fetch('/sitemap.xml');assert status==200
root=ET.fromstring(xml); urls=[e.text for e in root.findall('{*}url/{*}loc')]
assert len(urls)==len(set(urls))
assert not any('/thank-you' in u or '/admin' in u or '/api/' in u for u in urls)
results=[]
for url in urls:
    assert url.startswith(canonical_base+'/')
    path=urllib.parse.urlsplit(url).path
    status,html,_=fetch(path);assert status==200,(path,status)
    page=Page();page.feed(html)
    # Next serializes the root URL without a trailing slash; these are equivalent.
    normalized=lambda u: u+'/' if urllib.parse.urlsplit(u).path=='' else u
    assert list(map(normalized,page.canonical))==[normalized(url)],(path,page.canonical)
    assert 'noindex' not in page.meta.get('robots',''),path
    assert normalized(page.meta.get('og:url',''))==normalized(url),(path,page.meta.get('og:url'))
    assert page.meta.get('description'),path
    if path.startswith('/blog/'):
        graph=page.schemas[0]['@graph'];article=next(x for x in graph if x['@type']=='BlogPosting')
        assert article['url']==url and article['headline'] and article['publisher']
        if path=='/blog/how-ai-is-revolutionising-forest-carbon-accounting':
            assert article['datePublished']=='2025-04-12'
            assert article['dateModified']=='2026-09-13'
            assert '/platform/forest-monitoring' in page.links and '/platform/digital-mrv' in page.links
            assert not any(claim in html for claim in ['IPCC\'s 2023 guidelines', 'across every forest on the planet'])
        if path=='/blog/biodiversity-metrics-for-restoration-projects':
            assert article['datePublished']=='2026-09-18'
            assert article['dateModified']=='2026-09-18'
            assert page.h1_count==1
            assert '/platform/biodiversity-monitoring' in page.links
            assert page.links.count('/get-started?interest=biodiversity-monitoring&source=biodiversity-guide')==2
            assert not any('\u2014' in text for text in page.text)
    if path.startswith(('/platform/', '/solutions/')):
        assert page.h1_count==1,(path,page.h1_count)
        graph=page.schemas[0]['@graph']
        assert next(x for x in graph if x['@type']=='WebPage')['url']==url
        crumbs=next(x for x in graph if x['@type']=='BreadcrumbList')['itemListElement']
        assert crumbs[-1]['item']==url
        faqs=next(x for x in graph if x['@type']=='FAQPage')['mainEntity']
        content=' '.join(' '.join(page.text).split())
        for faq in faqs:
            assert faq['name'] in content,(path,faq['name'])
            assert faq['acceptedAnswer']['text'] in content,(path,faq['name'])
        assert '\u2014' not in content,path
        assert '/get-started' in page.links
        if path in ['/platform/biodiversity-monitoring', '/solutions/project-developers']:
            assert next(x for x in graph if x['@type']=='WebPage')['dateModified']=='2026-09-18'
            assert '/blog/biodiversity-metrics-for-restoration-projects' in page.links
            interest,source=('biodiversity-monitoring','biodiversity-monitoring') if path.startswith('/platform/') else ('forest-monitoring','project-developers')
            assert page.links.count(f'/get-started?interest={interest}&source={source}')==2
        if path=='/solutions/project-developers':
            assert crumbs[1]['item']==canonical_base+'/#who-we-serve'
    if path=='/':
        assert 'id="who-we-serve"' in html
        assert '/platform/biodiversity-monitoring' in page.links
        assert '/solutions/project-developers' in page.links
    if path=='/blog':
        archive={canonical_base+u for u in page.links if u.startswith('/blog/')}
        assert archive=={u for u in urls if '/blog/' in u}
    results.append({'path':path,'status':status,'canonical':url,'schema_blocks':len(page.schemas)})
assert canonical_base+'/platform/forest-monitoring' in urls
assert canonical_base+'/platform/digital-mrv' in urls
assert canonical_base+'/platform/biodiversity-monitoring' in urls
assert canonical_base+'/solutions/project-developers' in urls
assert canonical_base+'/blog/biodiversity-metrics-for-restoration-projects' in urls
status,brief,_=fetch('/resources/biodiversity-monitoring-brief.txt');assert status==200 and 'biodiversity' in brief.lower()
status,robots,_=fetch('/robots.txt');assert status==200 and canonical_base+'/sitemap.xml' in robots
status,html,_=fetch('/thank-you');page=Page();page.feed(html);assert status==200 and 'noindex' in page.meta.get('robots','')
for missing in ['/seo-foundation-missing-page','/blog/seo-foundation-missing-page']:
    status,_,_=fetch(missing);assert status==404,(missing,status)
print(json.dumps({'passed':True,'sitemap_urls':len(urls),'articles':sum('/blog/' in u for u in urls),'pages':results},indent=2))
