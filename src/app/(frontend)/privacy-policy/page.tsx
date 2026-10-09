import { pageMetadata } from '@/lib/seo';
import LegalPage from '@/components/LegalPage';

export const metadata = pageMetadata('/privacy-policy', 'Privacy Policy – Mynzo', 'Learn how Mynzo Carbon collects, uses and protects personal information, and how to contact us about privacy.');

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Last updated: October 2026"
      intro="Mynzo Carbon Pvt. Ltd. ('Mynzo', 'we', 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services."
      sections={[
        { title: '1. Information We Collect', content: ['We collect information you provide directly to us, such as when you create an account, submit a form, or contact us. This includes your name, email address, company name, and role.', 'We also collect information automatically when you use our platform, including usage data, log data, device information, and cookies.'] },
        { title: '2. Location and Motion Data (Mynzo Mobile App)', content: [
          'With your permission, the Mynzo mobile app collects your device\'s precise and approximate location, including when the app is closed or not in use, together with motion and activity data (for example, walking, driving or cycling) derived from your device\'s sensors.',
          'Purpose of collection. We use this information to automatically detect your trips, calculate the distance travelled and mode of transport, and estimate the carbon emissions shown in your logbook and dashboards. Location data is also used to support places you choose to save (such as home or work) and map and place search features.',
          'How your data is handled. Location data points are stored on your device and transmitted securely to Mynzo\'s servers in batches, where they are processed into trips and emissions estimates. We do not sell your location data or use it for advertising. Map and place search features are provided by Google, which receives the location information required to deliver those services.',
          'Your choices. You may deny or withdraw location or activity permissions at any time through your device settings. Automatic trip tracking will then stop, but you may continue to log activities manually.',
          'Retention. We retain location data for 30 days, after which it is deleted or anonymized.',
        ] },
        { title: '3. How We Use Your Information', content: ['We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.', 'We may also use your information to send promotional communications about Mynzo products and services — you can opt out at any time.'] },
        { title: '4. Information Sharing', content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with service providers who assist us in operating our platform, subject to confidentiality agreements.' },
        { title: '5. Data Security', content: 'We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.' },
        { title: '6. Data Retention', content: 'We retain your personal information for as long as necessary to provide our services, comply with our legal obligations, resolve disputes, and enforce our agreements. Location and motion data collected through the Mynzo mobile app is retained for the period stated in Section 2.' },
        { title: '7. Your Rights', content: 'Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, please contact us at support@mynzocarbon.com.' },
        { title: '8. Cookies', content: 'We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. See our Cookie Policy for more details.' },
        { title: '9. Changes to This Policy', content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.' },
        { title: '10. Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at support@mynzocarbon.com or write to: Mynzo Carbon Pvt. Ltd., India.' },
      ]}
    />
  );
}
