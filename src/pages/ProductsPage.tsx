import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';



 
const ProductsPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
   const products = [
    {
      id: 1,
      name: 'Par Boiled Rice',
      category: 'parboiledrice',
      image: "/uploads/kutharisi.jpg",
      description: 'Nutritious whole grain rice with a nutty flavor, ideal for healthy meals.',
      details: 'Par boiled rice is a nutritious option that undergoes a unique steaming process before milling. It retains more nutrients compared to regular white rice, making it a healthier choice for daily meals. Ideal for preparing steamed rice, it is a staple in many households.',
    },
    {
      id: 2,
      name: 'Polished Rice',
      category: 'polishedrice',
      image: "/uploads/udajal.jpg",
      description: 'Perfect for making rice flour and nutritional traditional recipes.',
      details: 'Polished rice is a refined variety commonly used for making rice and rice flour. The rice flour is a key ingredient in preparing traditional dishes like pittu and string hoppers, offering a smooth texture and delightful taste.',
    },
    {
      id: 3,
      name: 'Red Raw Rice',
      category: 'redrawric',
      image: "/uploads/theedal.png",
      description: 'A traditional rice variety, ideal for making rice and other delicacies.',
      details: 'Red raw rice is a traditional variety known for its rich flavor and nutritional benefits. It is often ground into rice flour, which is then used to prepare pittu and string hoppers, making it a favorite for traditional recipes.',
    },
  ];

  
  const filteredProducts = selectedTab === 'all' 
    ? products 
    : products.filter(product => product.category === selectedTab);

     const handleLearnMore = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
     <Helmet>
        <title>Our Products - Arana Rice</title>
        <meta name="description" content="Explore our range of premium rice products, including basmati, brown rice, and more, carefully processed to ensure quality and taste." />
        <meta name="keywords" content="Arana Rice, premium rice, basmati rice, brown rice, rice products" />
        <meta property="og:title" content="Our Products - Arana Rice" />
        <meta property="og:description" content="Explore our range of premium rice products, including basmati, brown rice, and more." />
        <meta property="og:image" content="/uploads/products-banner.png" />
        <meta property="og:url" content="https://aranarice.com/products" />
      </Helmet>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          backgroundImage: 'url("/uploads/foot.jpg")', // Use imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore our range of premium rice varieties, each processed to perfection
          </p>
        </div>
      </section>

    
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mb-10 fade-in-section">
           <h2 className="text-3xl font-bold text-center text-rice-brown mb-6">
                Explore Our Rice Varieties
               </h2>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale fade-in-section">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-rice-brown">{product.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button 
                    className="w-full bg-rice-brown hover:bg-rice-brown-light"
                    onClick={() => handleLearnMore(product)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
     
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProduct.details}</p>
            <Button 
              className="bg-rice-brown hover:bg-rice-brown-light w-full"
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
        </div>
      )}
      {/* Bulk Orders */}
      <section className="section-padding bg-rice-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <img 
                src="/uploads/bulk1.png"
                alt="Arana Rice - Bulk rice packaging"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="fade-in-section">
              <h2 className="text-3xl font-bold text-rice-brown mb-6">Bulk Orders Available</h2>
              <p className="text-lg mb-4">
                Our rice products are available in various package sizes to meet your needs, from retail 
                packs to wholesale quantities for restaurants, hotels, and food service businesses.
              </p>
              <p className="text-lg mb-6">
                Contact our sales team to discuss bulk pricing, custom packaging options, and delivery schedules 
                that work for your business.
              </p>
              <Button 
      className="bg-rice-green hover:bg-rice-green-light"
      onClick={() => navigate('/contactpage')}
    >
      Contact Bulk Orders
    </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto fade-in-section">
            <h2 className="text-3xl font-bold text-rice-brown mb-6">Our Quality Promise</h2>
            <p className="text-lg mb-6">
              Every grain of rice that leaves our facility undergoes rigorous quality checks to ensure it meets 
              our high standards. We carefully process, clean, and package our rice to preserve its freshness, 
              flavor, and nutritional value.
            </p>
            <p className="text-lg mb-8">
              We're so confident in the quality of our products that we offer a satisfaction guarantee. 
              If you're not completely satisfied with your purchase, we'll make it right.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg bg-rice-cream fade-in-section">
                <div className="text-rice-brown text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Quality Inspected</div>
              </div>
              <div className="p-6 rounded-lg bg-rice-cream fade-in-section">
                <div className="text-rice-brown text-4xl font-bold mb-2">0</div>
                <div className="text-lg">Artificial Additives</div>
              </div>
              <div className="p-6 rounded-lg bg-rice-cream fade-in-section">
                <div className="text-rice-brown text-4xl font-bold mb-2">30+</div>
                <div className="text-lg">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
