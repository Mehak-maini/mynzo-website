import PlatformPage from '@/components/PlatformPage';
import { projectDevelopersPage } from '@/data/projectDevelopersPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  projectDevelopersPage.path,
  projectDevelopersPage.metadataTitle,
  projectDevelopersPage.description,
  projectDevelopersPage.heroImage,
);

export default function ProjectDevelopersPage() {
  return <PlatformPage data={projectDevelopersPage} />;
}
