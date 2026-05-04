import LegalPage from '@/components/LegalPage';

export const metadata = { title: 'Cookie Policy – Mynzo' };

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="Last updated: January 2025"
      intro="This Cookie Policy explains how Mynzo Carbon Pvt. Ltd. uses cookies and similar tracking technologies on our platform. By using our platform, you consent to our use of cookies as described in this policy."
      sections={[
        { title: '1. What Are Cookies?', content: 'Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, to provide a better user experience, and to give website owners information about how the site is used.' },
        { title: '2. Types of Cookies We Use', content: ['Essential Cookies: These are necessary for the platform to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences or logging in.', 'Performance Cookies: These allow us to count visits and traffic sources so we can measure and improve the performance of our platform.', 'Functional Cookies: These enable the platform to provide enhanced functionality and personalisation, such as remembering your preferences.', 'Analytics Cookies: These help us understand how visitors interact with our platform by collecting and reporting information anonymously.'] },
        { title: '3. Third-Party Cookies', content: 'Some cookies are set by third-party services that appear on our pages. We do not control the use of these cookies and recommend you check the third-party websites for more information about their cookies and how to manage them.' },
        { title: '4. How to Manage Cookies', content: 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed. If you do this, however, some services may not function properly.' },
        { title: '5. Cookie Consent', content: 'When you first visit our platform, you will be shown a cookie banner asking for your consent to use non-essential cookies. You can change your cookie preferences at any time by contacting us.' },
        { title: '6. Updates to This Policy', content: 'We may update this Cookie Policy from time to time to reflect changes in technology, law, or our data practices. Any changes will become effective when we post the revised policy.' },
        { title: '7. Contact Us', content: 'If you have questions about our use of cookies, please contact us at support@mynzocarbon.com.' },
      ]}
    />
  );
}
