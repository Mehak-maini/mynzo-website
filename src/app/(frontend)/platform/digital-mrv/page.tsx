import PlatformPage from '@/components/PlatformPage';
import { digitalMrvPage } from '@/data/digitalMrvPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  digitalMrvPage.path,
  digitalMrvPage.metadataTitle,
  digitalMrvPage.description,
  digitalMrvPage.heroImage,
);

export default function DigitalMrvPage() {
  return <PlatformPage data={digitalMrvPage} />;
}
