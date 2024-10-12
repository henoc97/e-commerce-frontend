import Link from 'next/link';

import NavMenu from '../components/index.component/header/navigation-menu';
import Logo from '../components/index.component/header/logo';
import SearchInput from '../components/index.component/header/search-input';
import ShoppingCartButton from '../components/index.component/header/shopping-cart-button';
import FeaturedProductsSection from '../components/index.component/sections/featured-products-section';
import PromoBanner from '../components/index.component/sections/promo-banner';
import TestimonialSection from '../components/index.component/sections/customers-say';
import NewsletterSection from '../components/index.component/sections/newsletter';
import ShopLink from '../components/index.component/footer/shop-links';
import AboutLink from '../components/index.component/footer/about-links';
import SupportLink from '../components/index.component/footer/support-links';
import ConnectLink from '../components/index.component/footer/shop-links copy 3';
import { Button } from '../components/ui/button';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-[#5B4B8A]">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <Logo />
                        <NavMenu />
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <SearchInput />
                        </div>
                        <ShoppingCartButton />
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#5B4B8A]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#E8CDAF]">
                                    Discover Your Sound
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                                    Explore our vast collection of instruments,
                                    gear, and accessories to find your perfect
                                    musical match.
                                </p>
                            </div>
                            <Button className="bg-[#00B2A9] text-white">
                                Shop Now
                            </Button>
                        </div>
                    </div>
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
                    <TestimonialSection />
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
                    <NewsletterSection />
                </section>
            </main>
            <footer className="w-full py-6 bg-[#5B4B8A] text-white">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <ShopLink />
                        <AboutLink />
                        <SupportLink />
                        <ConnectLink />
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            © 2024 Musicland. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link
                                href="/privacy"
                                className="text-sm text-gray-400 hover:text-[#00B2A9]"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-gray-400 hover:text-[#00B2A9]"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
