import "lenis/dist/lenis.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SmoothScroll, RouteScroll } from "@/components/site/SmoothScroll";
import HomePage from "@/pages/HomePage";
import JewelleryPage from "@/pages/JewelleryPage";
import RestaurantPage from "@/pages/RestaurantPage";
import CustomSoftwarePage from "@/pages/CustomSoftwarePage";
import PrivacyPage from "@/pages/PrivacyPage";
import WebsiteDesignsPage from "@/pages/WebsiteDesignsPage";
import FounderPage from "@/pages/FounderPage";
import PanvelPage from "@/pages/PanvelPage";
import { PageMeta } from "@/components/site/PageMeta";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SmoothScroll />
      <RouteScroll />
      <PageMeta />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jewellery" element={<JewelleryPage />} />
        <Route path="/restaurant-software" element={<RestaurantPage />} />
        <Route path="/custom-software" element={<CustomSoftwarePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/website-designs" element={<WebsiteDesignsPage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/jewellery-software-panvel" element={<PanvelPage />} />
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
