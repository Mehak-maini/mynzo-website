import PlatformPage from '@/components/PlatformPage';
import { environmentalConsultantsPage } from '@/data/environmentalConsultantsPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  environmentalConsultantsPage.path,
  environmentalConsultantsPage.metadataTitle,
  environmentalConsultantsPage.description,
  environmentalConsultantsPage.heroImage,
  environmentalConsultantsPage.heroAlt,
);

export default function EnvironmentalConsultantsPage() {
  return <PlatformPage data={environmentalConsultantsPage} />;
}
