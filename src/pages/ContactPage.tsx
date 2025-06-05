import { Helmet } from 'react-helmet';  
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';


const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Initialize Google Maps
  useEffect(() => {
    // This would normally be a Google Maps integration
    // For this example, we'll just simulate the map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Helmet>
        <title>Contact Us - Arana Rice</title>
        <meta name="description" content="Get in touch with Arana Rice for inquiries about our premium rice products or business partnerships." />
        <meta name="keywords" content="Arana Rice, contact Arana Rice, premium rice inquiries" />
        <meta property="og:title" content="Contact Us - Arana Rice" />
        <meta property="og:description" content="Get in touch with Arana Rice for inquiries about our premium rice products or business partnerships." />
   <meta property="og:image" content="https://aranarice.com/uploads/contactusbg2.jpg" />
        <meta property="og:url" content="https://aranarice.com/contact" />
      </Helmet>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28">
           <div className="absolute inset-0">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: 'url("/uploads/contactusbg2.jpg")' ,// Use imported image
        //  // Path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(1.5px)', // Apply blur effect
      }}
    ></div>
  </div>
      
      
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get in touch with our team for inquiries, orders, or information
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-section">
              <h2 className="text-3xl font-bold text-rice-brown mb-6">Reach Out to Us</h2>
              <p className="text-lg mb-8">
                We'd love to hear from you! Whether you have questions about our products, want to place an order, 
                or are interested in learning more about our services, our team is here to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-rice-cream p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-rice-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-rice-brown mb-1">Address</h3>
                    <p className="text-gray-700">Aranarice,<br/> No-70, Power house road,<br/> Chunnakam, Jaffna,<br/>Srilanka </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rice-cream p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-rice-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-rice-brown mb-1">Phone</h3>
                    <p className="text-gray-700">+94 773 597 544</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rice-cream p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-rice-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-rice-brown mb-1">Email</h3>
                    <p className="text-gray-700">aranaarice@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rice-cream p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-rice-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-rice-brown mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-bold text-rice-brown mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                   <a 
                   href="https://www.facebook.com/profile.php?id=61576353503699" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="bg-rice-cream p-2 rounded-full text-rice-brown hover:bg-rice-brown hover:text-white transition-colors"
    >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a 
                   href="https://www.instagram.com/arana_rice/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="bg-rice-cream p-2 rounded-full text-rice-brown hover:bg-rice-brown hover:text-white transition-colors"
    >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                   <a 
                    href="https://x.com/RiceArana" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-rice-cream p-2 rounded-full text-rice-brown hover:bg-rice-brown hover:text-white transition-colors"
    >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg fade-in-section">
              <h2 className="text-2xl font-bold text-rice-brown mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-rice-green hover:bg-rice-green-light"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section-padding bg-rice-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl font-bold text-rice-brown mb-4">Our Location</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Find us in Chunnakam, Sri Lanka. Our facilities are easily accessible and open for visits by appointment.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96 fade-in-section">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.316650402162!2d80.03907561060639!3d9.739222190313026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe557065c92dfb%3A0xc88c5d72220be40e!2sArana%20rice%20mill!5e0!3m2!1sen!2slk!4v1746611259086!5m2!1sen!2slk"
             width="100%" 
             height="100%"
              style={{border:0}}
             allowFullScreen={true} 
             loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              {mapLoaded ? (
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=9.7350,80.0217&zoom=14&size=1200x600&markers=color:red%7C9.7350,80.0217&key=YOUR_API_KEY" 
                  alt="Map of Arana Rice Mill" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-500">Loading map...</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl font-bold text-rice-brown mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do you offer bulk pricing for businesses?",
                answer: "Yes, we offer competitive bulk pricing for restaurants, hotels, retailers, and other businesses. Please contact our sales team for more information and a customized quote."
              },
              {
                question: "What are your delivery options?",
                answer: "We offer local delivery within a 50km radius of our mill. For larger orders or locations outside this area, we can arrange shipping through our logistics partners."
              },
             
              {
                question: "How do I place an order?",
                answer: "You can place orders through our website, by phone, or by email. For first-time orders, we recommend calling our sales team who can guide you through the process."
              }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 fade-in-section">
                <h3 className="text-xl font-bold text-rice-brown mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
