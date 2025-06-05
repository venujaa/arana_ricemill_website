import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import factoryBackground from '@/assets/images/fawa.jpg';
import factoryImage1 from '@/assets/images/ft1.jpg';
import factoryImage2 from '@/assets/images/ft2.jpg';
import factoryImage3 from '@/assets/images/ft3.jpg';
import factoryImage4 from '@/assets/images/ft4.jpg';
import factoryImage5 from '@/assets/images/ft5.jpg';
import factoryImage6 from '@/assets/images/ft7.jpg';
import factoryImage7 from '@/assets/images/ft6.jpg';
import factoryImage8 from '@/assets/images/tour1.jpg';

const FactoryTourPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const factoryImages = [
    {
      id: 1,
       image: '/uploads/ft1.jpg',

      title: '',
      description: ''
    },
    {
      id: 2,
      image: "/uploads/ft2.jpg",
      title: '',
      description: ''
    },
    {
      id: 3,
      image: "/uploads/ft3.jpg",
      title: '',
      description: ''
    },
    {
      id: 4,
       image: "/uploads/ft4.jpg",
      title: '',
      description: ''
    },
    {
      id: 5,
       image: "/uploads/ft5.jpg",
      title: '',
      description: ''
    },
    {
      id: 6,
      image: "/uploads/ft6.jpg",
      title: 'Rice Sorting',
      description: 'Advanced sorting technology separates grains based on size and quality.'
    },
    {
      id: 7,
       image: "/uploads/ft7.jpg",
      title: 'Transport Fleet',
      description: 'Our dedicated fleet ensures timely delivery to customers across the region.'
    },
    {
      id: 8,
       image: "/uploads/tour1.jpg",
      title: '',
      description: ''
    }
  ];

  return (
    <>
     <Helmet>
        <title>Factory Tour - Arana Rice</title>
        <meta name="description" content="Take a virtual tour of Arana Rice's state-of-the-art rice milling facility. Explore our process, technology, and commitment to quality." />
        <meta name="keywords" content="Arana Rice, rice factory, rice milling, rice processing, factory tour, rice production" />
        <meta property="og:title" content="Factory Tour - Arana Rice" />
        <meta property="og:description" content="Take a virtual tour of Arana Rice's state-of-the-art rice milling facility. Explore our process, technology, and commitment to quality." />
        <meta property="og:image" content="https://aranarice.com/uploads/ft1.jpg" />
        <meta property="og:image" content="https://aranarice.com/uploads/ft2.jpg" />
        <meta property="og:image" content="https://aranarice.com/uploads/ft3.jpg" />
        <meta property="og:image" content="https://aranarice.com/uploads/ft4.jpg" />
        <meta property="og:image" content="https://aranarice.com/uploads/ft5.jpg" />
        <meta property="og:image" content="https://aranarice.com/uploads/ft6.jpg" />
        <meta property="og:image" content="https://aranarice.com/uploads/ft7.jpg" />
        <meta property="og:image" content="https://aranarice.com/uploads/tour1.jpg" />
        <meta property="og:url" content="https://aranarice.com/factory-tour" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://aranarice.com/uploads/ft1.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
         backgroundImage: 'url("/uploads/fawa.jpg")', // Use imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Factory Tour
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Take a visual journey through our state-of-the-art rice milling facility
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto fade-in-section">
            <h2 className="text-3xl font-bold text-rice-brown mb-6">Our Processing Facility</h2>
            <p className="text-lg mb-6">
              Welcome to a virtual tour of Arana Rice's modern processing facility. Here, tradition meets 
              technology as we process the finest rice grains with precision and care.
            </p>
            <p className="text-lg mb-8">
              Our facility combines cutting-edge machinery with expert craftsmanship to ensure every grain 
              of rice meets our exacting standards of quality.
            </p>
          </div>
        </div>
      </section>

      {/* Factory Tour Gallery */}
      <section className="section-padding bg-rice-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {factoryImages.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div 
                    className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover-scale fade-in-section"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="h-64">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div>
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto rounded-md"
                    />
                    <div className="pt-4">
                      <h3 className="font-bold text-xl text-rice-brown">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl font-bold text-rice-brown mb-6">Our Rice Processing Journey</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Follow the journey of rice from harvest to packaging at Arana Rice Mill.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-rice-green transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: 1,
                  title: 'Receiving & Inspection',
                  description: 'Rice arrives at our facility where it undergoes initial quality checks for moisture content, damage, and impurities.'
                },
                {
                  step: 2,
                  title: 'Cleaning & De-stoning',
                  description: 'Rice passes through screens and air separators to remove stones, dirt, and other foreign materials.'
                },
                {
                  step: 3,
                  title: 'Husking',
                  description: 'Rubber rollers remove the outer husk from the rice kernels, transforming paddy into brown rice.'
                },
                {
                  step: 4,
                  title: 'Polishing',
                  description: 'For white rice varieties, additional layers are removed and grains are polished to the desired degree.'
                },
                {
                  step: 5,
                  title: 'Grading & Sorting',
                  description: 'Rice is sorted by size and quality, with broken grains separated from whole grains.'
                },
                {
                  step: 6,
                  title: 'Packaging & Storage',
                  description: 'The finished rice is packaged in different sizes and stored in climate-controlled conditions until shipping.'
                }
              ].map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center fade-in-section ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h3 className="text-2xl font-bold text-rice-brown mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="md:w-2/12 flex justify-center my-6 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-rice-green flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                    {/* Empty space for layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default FactoryTourPage;
