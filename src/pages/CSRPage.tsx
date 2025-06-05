import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';


const CSRPage = () => {
   const [showModal, setShowModal] = useState(false);

  const handleLearnMore = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const initiatives = [
    {
      title: 'Build Suthumali Eenjadi Vairavar Kovil temple gateway tower',
       image: "/uploads/eeenjadi.jpg",
      description: 'We contributed to the construction of the Suthumali Eenjadi Vairavar Kovil, preserving cultural heritage and providing a spiritual hub for the community.',
      impact: 'Enhanced cultural preservation and supported devotees in the region'
    },
    {
      title: 'Build Inuvil Manjathadi Temple',
      image: "/uploads/temple.jpg",
      description: 'We supported the renovation of the Inuvil Manjathadi Temple, fostering a sense of community and providing a space for cultural and spiritual gatherings.',
      impact: 'Improved facilities for community members and visitors'
    },
    {
      title: 'Environmental Conservation',
       image: "/uploads/en.jpeg",
      description: 'Our sustainable practices include water conservation, waste reduction, and transitioning to renewable energy sources.',
      impact: 'Reduced water usage by 30% in the past 5 years'
    },
    {
      title: 'Education Initiatives',
     image: "/uploads/ed.jpg",
      description: 'We provide educational support to children in our Society.',
      impact: 'Support to buid classromms in schools and provide scholarships to students'
    },
    {
      title: 'Community Development',
       image:"/uploads/community.jpeg",
      description: 'We invest in  healthcare, and other community needs in the regions where we operate.',
      impact: 'Support to build healthcare centers and  healthcare clinics'
    },
    {
      title: 'Recyclable and Reusable Cloth Bags',
       image: "/uploads/recycle.jpg",
      description: 'We promote the use of cloth bags that are recyclable and reusable, reducing the dependency on single-use plastics and encouraging sustainable practices.',
      impact: 'Reduced single-use plastic waste by 70% and empowered local artisans by creating job opportunities for bag production.'
    },
    {
      title: 'Employee Welfare',
       image: "/uploads/emp.jpg",
      description: 'We provide fair wages, comprehensive benefits, and ongoing professional development opportunities for our team.',
      impact: 'Named a "Best Place to Work" for 5 consecutive years'
    },
    
  ];

  return (
    <>
    <Helmet>
       <title>CSR - Arana Rice</title>
  <meta property="og:title" content="CSR - Arana Rice" />
  <meta property="og:description" content="Discover Arana Rice's CSR initiatives, sustainability, and community impact." />
  <meta property="og:image" content="https://aranarice.com/uploads/eeenjadi.jpg" />
  <meta property="og:image" content="https://aranarice.com/uploads/temple.jpg" />
  <meta property="og:image" content="https://aranarice.com/uploads/en.jpeg" />
  <meta property="og:image" content="https://aranarice.com/uploads/ed.jpg" />
  <meta property="og:image" content="https://aranarice.com/uploads/community.jpeg" />
  <meta property="og:image" content="https://aranarice.com/uploads/recycle.jpg" />
  <meta property="og:image" content="https://aranarice.com/uploads/emp.jpg" />
  <meta property="og:url" content="https://aranarice.com/csr" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://aranarice.com/uploads/eeenjadi.jpg" />
</Helmet>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
         backgroundImage: 'url("/uploads/csr2.png")', // Use imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our commitment to sustainable practices and community development
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in-section">
            <h2 className="text-3xl font-bold text-rice-brown mb-6">Our Approach to CSR</h2>
            <p className="text-lg mb-4">
              At Arana Rice , we believe that our success is intertwined with the wellbeing of our 
              communities, our environment, and our employees. Our corporate social responsibility 
              initiatives reflect our commitment to creating positive impact beyond profit.
            </p>
            <p className="text-lg mb-6">
              Our CSR strategy focuses on three key pillars: sustainable farming practices, community 
              development, and environmental stewardship. Through these efforts, we aim to contribute 
              to a more equitable and sustainable future for all our stakeholders.
            </p>
          </div>
        </div>
      </section>

   {/* CSR Initiatives */}
   <section className="section-padding bg-rice-cream">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12 fade-in-section">
      <h2 className="text-3xl font-bold text-rice-brown mb-4">Our CSR Initiatives</h2>
      <p className="text-lg max-w-3xl mx-auto">
        Explore the various ways we're working to make a positive difference in our communities and the environment.
      </p>
    </div>
    
    {/* Display all initiatives */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {initiatives.map((initiative, index) => (
        <Card key={index} className="overflow-hidden hover-scale fade-in-section rounded-lg shadow-lg">
          <div className="h-56 overflow-hidden rounded-t-lg">
            <img 
              src={initiative.image} 
              alt={initiative.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 height-56"
            />
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-rice-brown mb-2">{initiative.title}</h3>
            <p className="text-gray-600 mb-4">{initiative.description}</p>
            <div className="bg-rice-green/10 px-4 py-2 rounded-md">
              <p className="text-rice-green font-medium">Impact: {initiative.impact}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

    <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h2 className="text-3xl font-bold text-rice-brown mb-6">Our Commitment to Sustainability</h2>
              <p className="text-lg mb-4">
                At Arana Rice , sustainability is at the heart of everything we do. From sourcing rice 
                responsibly to implementing eco-friendly practices, we strive to minimize our environmental 
                footprint while maximizing our positive impact on communities.
              </p>
              <p className="text-lg mb-6">
                Our initiatives include reducing water usage, promoting renewable energy, and supporting 
                local farmers with resources and training.
              </p>
              <Button 
                className="bg-rice-green hover:bg-rice-green-light mb-4"
                onClick={handleLearnMore}
              >
                Learn More About Our Efforts
              </Button>
            </div>
             <div className="fade-in-section">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-rice-green/10 p-6 rounded-lg text-center">
                  <div className="text-rice-green text-4xl font-bold mb-2">30%</div>
                  <div className="text-gray-700">Water Usage Reduction</div>
                </div>
                <div className="bg-rice-brown/10 p-6 rounded-lg text-center">
                  <div className="text-rice-brown text-4xl font-bold mb-2">45%</div>
                  <div className="text-gray-700">Renewable Energy Adoption</div>
                </div>
                <div className="bg-rice-gold/10 p-6 rounded-lg text-center">
                  <div className="text-rice-brown text-4xl font-bold mb-2">500+</div>
                  <div className="text-gray-700">Farmers Empowered</div>
                </div>
                <div className="bg-rice-cream p-6 rounded-lg text-center">
                  <div className="text-rice-brown text-4xl font-bold mb-2">70%</div>
                  <div className="text-gray-700">Plastic Waste Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Detailed Sustainability Efforts</h2>
            <p className="text-gray-700 mb-4">
              At Arana Rice , we are committed to sustainability through various initiatives:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Reducing water usage by implementing advanced irrigation techniques.</li>
              <li>Transitioning to renewable energy sources to power our operations.</li>
              <li>Supporting local farmers with training and resources to improve yields sustainably.</li>
              <li>Promoting the use of recyclable and reusable materials to reduce waste.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              These efforts are part of our mission to create a sustainable future for our communities and the planet.
            </p>
            <Button 
              className="bg-rice-brown hover:bg-rice-brown-light w-full"
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
        </div>
      )}
      
{/*       

     

     
<section className="section-padding">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto fade-in-section">
      <h2 className="text-3xl font-bold text-rice-brown mb-6">Get Involved</h2>
      <p className="text-lg mb-8">
        If you wish to receive specific benefits from our CSR initiatives or have suggestions to help us 
        improve our activities, we’d love to hear from you. Please email us with your ideas or requests, 
        and our team will get back to you promptly.
      </p>
      <Button 
        className="bg-rice-green hover:bg-rice-green-light"
        onClick={() => window.location.href = 'mailto:aranarice@gmail.com'}
      >
        Email Our CSR Team
      </Button>
    </div>
  </div>
</section> */}

<section className="section-padding">
  <div className="container mx-auto px-4">
    <div className="bg-rice-cream p-8 rounded-lg shadow-lg text-center fade-in-section">
      <h2 className="text-3xl font-bold text-rice-brown mb-6">Get Involved</h2>
      <p className="text-lg mb-8">
        If you wish to receive specific benefits from our CSR initiatives or have suggestions to help us 
        improve our activities, we’d love to hear from you. Please email us with your ideas or requests, 
        and our team will get back to you promptly.
      </p>
      <Button 
        className="bg-rice-green hover:bg-rice-green-light"
        onClick={() => window.location.href = 'mailto:aranarice@gmail.com'}
      >
        Email Our CSR Team
      </Button>
    </div>
  </div>
</section>
    </>
  );
};

export default CSRPage;
