import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Script from 'next/script';
import '@/styles/globals.css';

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          if (['www.mynzocarbon.com', 'mynzocarbon.com'].includes(window.location.hostname)) {
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yfl67kula7");
          }
        `}
      </Script>
      <Nav />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>{children}</main>
      <Footer />
    </div>
  );
}
