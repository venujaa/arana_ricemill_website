
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import FactoryTourPage from "./pages/FactoryTourPage";
import CSRPage from "./pages/CSRPage";
import ContactPage from "./pages/ContactPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
     <title>Arana Rice - Premium Rice Products</title>
      <meta name="description" content="Arana Rice offers premium rice products with a commitment to quality, sustainability, and innovation." />
      <meta name="keywords" content="Arana Rice, premium rice, sustainable rice, rice processing, quality rice" />
      <meta name="author" content="Arana Rice" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Arana Rice - Premium Rice Products" />
      <meta property="og:description" content="Discover our story, values, and commitment to delivering premium rice products." />
      <meta property="og:image" content="/uploads/mission.png" />
      <meta property="og:url" content="https://aranarice.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/factory-tour" element={<FactoryTourPage />} />
            <Route path="/csr" element={<CSRPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contactpage" element={<ContactUsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
