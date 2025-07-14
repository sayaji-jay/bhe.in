import HeroSection from "@/components/hero-section.jsx";
import AboutSection from "@/components/about-section.jsx";
import ProductCarousel from "@/components/product-carousel.jsx";
import ProductCategories from "@/components/product-categories.jsx";
import FacebookSection from "@/components/facebook-section.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductCarousel />
      <ProductCategories />
      <FacebookSection />
    </main>
  );
}
