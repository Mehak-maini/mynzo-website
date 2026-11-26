import PlatformPage from '@/components/PlatformPage';
import { corporateNatureMonitoringPage } from '@/data/corporateNatureMonitoringPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  corporateNatureMonitoringPage.path,
  corporateNatureMonitoringPage.metadataTitle,
  corporateNatureMonitoringPage.description,
  corporateNatureMonitoringPage.heroImage,
  corporateNatureMonitoringPage.heroAlt,
);

export default function CorporateNatureMonitoringPage() {
  return <PlatformPage data={corporateNatureMonitoringPage} />;
}
