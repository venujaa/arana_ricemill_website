import { Helmet } from 'react-helmet';

const Terms = () => (
  <>
    <Helmet>
      <title>Terms & Conditions - Arana Rice</title>
      <meta name="description" content="Read the terms and conditions for using Arana Rice's website." />
    </Helmet>
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p>
        By using our website, you agree to the following terms and conditions. Please read them carefully.
      </p>
       <ul className="list-disc pl-6 space-y-2 text-left">
        <li>The content on this site is for general information and promotional purposes only.</li>
        <li>All images, text, and designs are the property of Arana Rice or used with permission — you may not reuse or copy them without consent.</li>
        <li>You may view, share, or link to our content for personal, non-commercial purposes only.</li>
        <li>This website does not allow user registration or login.</li>
        <li>No online purchases or payments are accepted through this site.</li>
        <li>We may include links to other websites. We are not responsible for their content or privacy practices.</li>
        <li>We aim to provide accurate and up-to-date information but do not guarantee completeness or accuracy.</li>
        <li>We are not liable for any direct or indirect damages resulting from the use of our website.</li>
        <li>These terms may change without notice. Updates will be posted on this page.</li>
        <li>The website is governed by the laws of [Insert Country or Region].</li>
        <li>For questions, contact us at: [your email address]</li>
      </ul>
    </div>
  </>
);

export default Terms;