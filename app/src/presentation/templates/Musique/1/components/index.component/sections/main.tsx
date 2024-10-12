import TestimonialSection from "./customers-say";
import FeaturedProductsSection from "./featured-products-section";
import HeroSection from "./hero";
import NewsletterSection from "./newsletter";
import PromoBanner from "./promo-banner";


const Main: React.FC = () => {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#5B4B8A]">
                <HeroSection />
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <FeaturedProductsSection />
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E8CDAF]">
                <div className="container px-4 md:px-6">
                    <PromoBanner />
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                        What Our Customers Say
                    </h2>
                    <TestimonialSection />
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
                <NewsletterSection />
            </section>
        </main>
    );
};

export default Main;
