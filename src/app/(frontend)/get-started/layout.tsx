import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/get-started', 'Book a Forest Monitoring Demo | Mynzo Carbon', 'Tell us about your forest monitoring project. Contact Mynzo Carbon to explore satellite intelligence, carbon tracking and ground-truth validation.');

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
