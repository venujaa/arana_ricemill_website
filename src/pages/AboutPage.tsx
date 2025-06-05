import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  return (
    <>
    <Helmet>
        <title>About Us - Arana Rice</title>
        <meta name="description" content="Learn about Arana Rice, our mission, vision, and commitment to quality rice processing." />
        <meta name="keywords" content="Arana Rice, About Arana Rice, premium rice, sustainable rice" />
        <meta property="og:title" content="About Us - Arana Rice" />
        <meta property="og:description" content="Learn about Arana Rice, our mission, vision, and commitment to quality rice processing." />
          <meta property="og:image" content="https://aranarice.com/uploads/ab.jpg" />
           
        <meta property="og:url" content="https://aranarice.com/about" />
      </Helmet>
<section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
 
  <div className="absolute inset-0">
    <div
      className="w-full h-full"
      style={{
       backgroundImage: 'url("/uploads/abwa.jpg")', // Path to your background image
        // Use imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(1.5px)', // Apply blur effect
      }}
    ></div>
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
      About Arana Rice
    </h1>
    <p
      className="text-xl text-white mb-6 max-w-3xl mx-auto animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      Discover our story, our values, and our commitment to quality rice processing
    </p>
  </div>
</section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <img 
                src="/uploads/ab.jpg" 
               
                alt="Arana Rice - Rice field"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="fade-in-section">
              <h2 className="text-3xl font-bold text-rice-brown mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Established in 1987, Arana Rice has grown from a small family operation to one of 
                the leading rice processing facilities in the region. For over three decades, we've been 
                committed to providing the highest quality rice products to our customers.
              </p>
              <p className="text-lg mb-4">
                Our journey began with a simple vision: to process rice that meets the highest standards 
                of quality while supporting local farmers and the community. Today, that vision continues 
                to guide everything we do.
              </p>
              <p className="text-lg">
                We combine traditional knowledge with modern technology to ensure every grain of rice that 
                leaves our facility is perfect in texture, taste, and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section-padding bg-rice-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md fade-in-section">
              <h3 className="text-2xl font-bold text-rice-green mb-4">Our Mission</h3>
              <img 
               src="/uploads/mission.png" // Path to the mission image
           
               alt="Arana Rice - Our Mission" 
               className="rounded-lg shadow-lg w-full h-64 object-cover mb-6"
                />
              <p className="text-lg italic mb-4">
                "To deliver premium rice products through sustainable practices and innovative processing techniques."
              </p>
              <p>
                We are committed to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Sourcing the finest rice grains from trusted farmers</li>
                <li>Implementing innovative processing techniques to preserve quality</li>
                <li>Ensuring food safety and hygiene at every step</li>
                <li>Providing nutritious rice products that meet customer expectations</li>
                <li>Operating in an environmentally responsible manner</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md fade-in-section">
              <h3 className="text-2xl font-bold text-rice-brown mb-4">Our Vision</h3>
              <img 
               src="/uploads/vision.png" // Path to the mission image
               
                alt="Arana Rice - Our Mission" 
                className="rounded-lg shadow-lg w-full h-64 object-cover mb-6"
  />
              <p className="text-lg italic mb-4">
                "To be a leader in rice milling, ensuring the highest quality standards and customer satisfaction."
              </p>
              <p>
                We aim to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Set the benchmark for quality in the rice processing industry</li>
                <li>Expand our product range to meet evolving consumer needs</li>
                <li>Invest in sustainable technologies that minimize environmental impact</li>
                <li>Support the economic growth of our local farming communities</li>
                <li>Be recognized as a trusted brand for premium rice products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Values */}
      <section className="section-padding bg-rice-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg max-w-3xl mx-auto">
              These principles guide everything we do at Arana Rice , from sourcing to processing to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We are uncompromising in our commitment to quality at every step of the process.'
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and the highest ethical standards.'
              },
              {
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible practices that protect our planet.'
              },
              {
                title: 'Innovation',
                description: 'We continuously seek better ways to improve our products and processes.'
              },
              {
                title: 'Community',
                description: 'We support and give back to the communities where we live and work.'
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from production to customer service.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-rice-green-light p-6 rounded-lg fade-in-section">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-rice-cream">
        <div className="container mx-auto px-4 text-center fade-in-section">
          <h2 className="text-3xl font-bold text-rice-brown mb-6">Discover Our Products</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Experience the quality and taste that comes from our commitment to excellence in rice processing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-rice-brown hover:bg-rice-brown-light">
              <Link to="/products">
                View Our Products
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-rice-brown text-rice-brown hover:bg-rice-brown hover:text-white">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
