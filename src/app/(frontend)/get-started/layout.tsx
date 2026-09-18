import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/get-started', 'Discuss Your Monitoring Project | Mynzo Carbon', 'Discuss forest, biodiversity and carbon monitoring with Mynzo Carbon. Share your site location, existing field data and the evidence your project needs.');

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
