import FeaturedSection from "../components/FeaturedSection";
import HomeSlider from "../components/HomeSlider";
import NewsletterSection from "../components/NewsletterSection";
import ProductsSection from "../components/ProductsSection";
import ReviewSection from "../components/ReviewSection";
import ServiceSection from "../components/ServiceSection";


export default function Home() {
  return (
    <>
      <HomeSlider />
      <ServiceSection />
      <ProductsSection />
      <FeaturedSection />
      <ReviewSection />
      <NewsletterSection />
    </>
  )
}