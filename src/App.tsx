import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurStory from './pages/about/OurStory';
import Culture from './pages/about/Culture';
import Careers from './pages/about/Careers';
import HowWeWork from './pages/about/HowWeWork';
import Awards from './pages/about/Awards';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/story" element={<OurStory />} />
          <Route path="/about/culture" element={<Culture />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/how-we-work" element={<HowWeWork />} />
          <Route path="/about/awards" element={<Awards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
