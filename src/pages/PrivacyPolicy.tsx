import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy - Arana Rice</title>
      <meta name="description" content="Read the privacy policy for Arana Rice." />
    </Helmet>
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p>
        We value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
      </p>
    <ul className="list-disc pl-6 space-y-2 text-left">
        <li>We do not collect personal information from users.</li>
        <li>No login or account creation is required or available on our website.</li>
        <li>Contact: For any questions, email us at aranaarice@gmail.com.</li>
        <li>We do not collect payment information or process any transactions.</li>
        <li>We may use basic analytics tools (like Google Analytics) to understand general visitor behavior (e.g., pages visited, time spent, device type).</li>
        <li>Cookies may be used only to enhance website performance and user experience.</li>
        <li>We do not share, sell, or rent any personal data to third parties.</li>
        <li>Our site may contain links to external websites. We are not responsible for their privacy practices.</li>
        <li>We do not knowingly collect information from children under 13.</li>
        <li>This policy may be updated occasionally. Changes will be reflected on this page.</li>
      </ul>
    </div>
  </>
);

export default PrivacyPolicy;