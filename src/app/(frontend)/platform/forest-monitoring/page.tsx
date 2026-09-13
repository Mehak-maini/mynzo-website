import PlatformPage from '@/components/PlatformPage';
import { forestMonitoringPage } from '@/data/forestMonitoringPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  forestMonitoringPage.path,
  forestMonitoringPage.metadataTitle,
  forestMonitoringPage.description,
  forestMonitoringPage.heroImage,
);

export default function ForestMonitoringPage() {
  return <PlatformPage data={forestMonitoringPage} />;
}
