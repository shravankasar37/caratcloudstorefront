import "lenis/dist/lenis.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SmoothScroll, RouteScroll } from "@/components/site/SmoothScroll";
import HomePage from "@/pages/HomePage";
import JewelleryPage from "@/pages/JewelleryPage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SmoothScroll />
      <RouteScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jewellery" element={<JewelleryPage />} />
        <Route path="/jewellery-erp" element={<Navigate to="/jewellery" replace />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default App;
