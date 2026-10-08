import "lenis/dist/lenis.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SmoothScroll, RouteScroll } from "@/components/site/SmoothScroll";
import HomePage from "@/pages/HomePage";
import JewelleryPage from "@/pages/JewelleryPage";
import EstatePage from "@/pages/EstatePage";

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <RouteScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jewellery-erp" element={<JewelleryPage />} />
        <Route path="/estate" element={<EstatePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default App;
