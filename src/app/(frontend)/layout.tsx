import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>{children}</main>
      <Footer />
    </div>
  );
}
