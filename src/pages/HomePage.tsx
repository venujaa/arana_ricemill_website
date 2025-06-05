import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';



const HomePage = () => {
   return (
    <>
       <Helmet>
        <title>Home - Arana Rice</title>
        <meta name="description" content="Welcome to Arana Rice - Discover premium rice products with a commitment to quality, sustainability, and innovation." />
        <meta name="keywords" content="Arana Rice, premium rice, sustainable rice, rice processing, quality rice, Sri Lanka rice" />
        <meta property="og:title" content="Home - Arana Rice" />
        <meta property="og:description" content="Discover premium rice products with a commitment to quality, sustainability, and innovation." />
        <meta property="og:image" content="https://aranarice.com/uploads/quality.jpg" />
        <meta property="og:image" content="https://aranarice.com/uploads/front1.jpg" />
        <meta property="og:url" content="https://aranarice.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://aranarice.com/uploads/quality.jpg" />
        {/* Social links for brand knowledge panel */}
        <meta property="og:see_also" content="https://www.facebook.com/profile.php?id=61576353503699" />
        <meta property="og:see_also" content="https://www.instagram.com/arana_rice/" />
        <meta property="og:see_also" content="https://x.com/RiceArana" />
      </Helmet>
    <section className="relative min-h-screen flex items-center justify-center">
 <div
  className="absolute inset-0"
  style={{
    backgroundImage: 'url("/uploads/front1.jpg")', // Use imported image
    backgroundSize: 'contain', 
    backgroundPosition: 'center',
    filter: 'blur(4px)', 
    zIndex: -1
  }}
></div>


 
  <div className="absolute inset-0 bg-black opacity-40"></div>


  <div className="container mx-auto px-4 z-10 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
      Arana Rice
    </h1>
    <p
      className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      Quality Rice Processing for Every Grain
    </p>
    <Button
      asChild
      className="bg-rice-green hover:bg-rice-green-light text-white px-8 py-6 rounded-md text-lg animate-fade-in"
      style={{ animationDelay: '0.4s' }}
    >
      <Link to="/products">Explore Our Products</Link>
    </Button>
  </div>
</section>

      {/* About Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h2 className="text-3xl md:text-4xl font-bold text-rice-brown mb-6">
                Our Commitment to Quality
              </h2>
              <p className="text-lg mb-6">
                At Arana Rice , we've been processing the finest quality rice for generations. 
                Our state-of-the-art facilities combine traditional wisdom with modern technology 
                to ensure every grain meets our high standards.
              </p>
              <p className="text-lg mb-6">
                From farm to table, we oversee every step of the process, ensuring that each batch 
                of rice is perfectly milled, cleaned, and packaged with care.
              </p>
              <Button asChild className="bg-rice-brown hover:bg-rice-brown-light">
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            
            <div className="fade-in-section rounded-lg overflow-hidden shadow-xl">
              <img 
              
                 src="/uploads/quality.jpg" 
                alt="Arana Rice - Rice processing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    
   
      <section className="section-padding bg-gray-100">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12 fade-in-section">
      <h2 className="text-3xl md:text-4xl font-bold text-rice-brown mb-4">
        Our Premium Rice Products
      </h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-700">
        Discover the finest quality rice, carefully selected and processed to meet the highest standards of taste and quality.
      </p>
    </div>

    
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl fade-in-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
               src="/uploads/kutharisi.jpg"
              alt="Arana Rice - Premium Brown Rice"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-rice-brown mb-4">
              Premium Brown Rice
            </h3>
            <p className="text-lg text-gray-600 mb-6">
            Long-grain, nutrient-rich brown rice with a wholesome flavor and chewy texture, perfect for health-conscious meals. Our Premium Brown Rice is minimally processed to retain its natural bran and germ layers, ensuring maximum nutrition and taste.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button asChild className="bg-rice-gold hover:bg-rice-gold/90 text-rice-brown px-6 py-3 rounded-md shadow-md">
                <Link to="/products">
                  View More Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>   

      <section 
        className="section-padding relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1622812672247-5337ad1b9cfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-rice-brown opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <div className="max-w-3xl mx-auto fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take a Virtual Tour of Our Factory
            </h2>
            <p className="text-xl mb-8">
              Experience the journey of rice from harvest to packaging. See how we maintain quality 
              at every step of our state-of-the-art processing facility.
            </p>
            <Button asChild className="bg-rice-cream hover:bg-white text-rice-brown">
              <Link to="/factory-tour">
                Explore Our Factory
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CSR and Contact Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-rice-green/10 p-8 rounded-lg fade-in-section">
              <h3 className="text-2xl font-bold text-rice-green mb-4">
                Our Commitment to Community
              </h3>
              <p className="mb-6">
                At Arana Rice , we believe in giving back to the community. Learn about 
                our corporate social responsibility initiatives and how we support local farmers.
              </p>
              <Button asChild variant="outline" className="border-rice-green text-rice-green hover:bg-rice-green hover:text-white">
                <Link to="/csr">
                  View CSR Initiatives
                </Link>
              </Button>
            </div>
            
            <div className="bg-rice-brown/10 p-8 rounded-lg fade-in-section">
              <h3 className="text-2xl font-bold text-rice-brown mb-4">
                Get in Touch with Us
              </h3>
              <p className="mb-6">
                Have questions about our products or services? Want to place an order? 
                Our team is ready to assist you. Contact us today.
              </p>
              <Button asChild variant="outline" className="border-rice-brown text-rice-brown hover:bg-rice-brown hover:text-white">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
