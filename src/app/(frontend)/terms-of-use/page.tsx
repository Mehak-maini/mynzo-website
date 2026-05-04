import LegalPage from '@/components/LegalPage';

export const metadata = { title: 'Terms of Use – Mynzo' };

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      subtitle="Last updated: January 2025"
      intro="These Terms of Use govern your use of the Mynzo Carbon platform and services. By accessing or using our platform, you agree to be bound by these terms. Please read them carefully."
      sections={[
        { title: '1. Acceptance of Terms', content: 'By accessing and using the Mynzo platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.' },
        { title: '2. Use of the Platform', content: ['You may use our platform only for lawful purposes and in accordance with these Terms. You agree not to use the platform in any way that violates any applicable law or regulation.', 'You must not attempt to gain unauthorized access to any part of our platform, or any system or network connected to our platform.'] },
        { title: '3. Intellectual Property', content: 'The platform and its original content, features, and functionality are and will remain the exclusive property of Mynzo Carbon Pvt. Ltd. and its licensors. Our trademarks may not be used in connection with any product or service without prior written consent.' },
        { title: '4. User Accounts', content: 'When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.' },
        { title: '5. Data Accuracy', content: 'While Mynzo strives to provide accurate and up-to-date data and analysis, we do not warrant the completeness, accuracy, or reliability of any information on our platform. Data should be used in conjunction with professional judgment.' },
        { title: '6. Limitation of Liability', content: 'To the maximum extent permitted by applicable law, Mynzo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill.' },
        { title: '7. Termination', content: 'We may terminate or suspend your access to the platform immediately, without prior notice or liability, for any reason, including if you breach these Terms.' },
        { title: '8. Changes to Terms', content: 'We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes. Your continued use of the platform after changes constitutes acceptance of the new Terms.' },
        { title: '9. Governing Law', content: 'These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.' },
      ]}
    />
  );
}
