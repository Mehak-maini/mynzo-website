import PlatformPage from '@/components/PlatformPage';
import { biodiversityMonitoringPage } from '@/data/biodiversityMonitoringPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  biodiversityMonitoringPage.path,
  biodiversityMonitoringPage.metadataTitle,
  biodiversityMonitoringPage.description,
  biodiversityMonitoringPage.heroImage,
);

export default function BiodiversityMonitoringPage() {
  return <PlatformPage data={biodiversityMonitoringPage} />;
}
