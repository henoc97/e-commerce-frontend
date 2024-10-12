import Header from '../components/index.component/header/header';
import Footer from '../components/index.component/footer/footer';
import Categories from '../components/shop.component/aside/categories';
import PriceRangeSlider from '../components/shop.component/aside/price-range-slider';
import ShopProducts from '../components/shop.component/section/shop-products';
import SwitchProductsPages from '../components/shop.component/section/switch-products-pqges';
import FilterSelector from '../components/shop.component/section/filter-selector';

export default function Shop() {
    return (
        <div className="flex flex-col min-h-screen bg-[#5B4B8A]">
            <Header />
            <main className="flex-1 bg-white">
                <div className="container px-4 md:px-6 py-8">
                    <h1 className="text-3xl font-bold mb-8">
                        Shop Our Products
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8">
                        <aside className="w-full md:w-1/4">
                            <div className="space-y-6">
                                <Categories />
                                <PriceRangeSlider />
                            </div>
                        </aside>
                        <div className="w-full md:w-3/4">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm text-gray-500">
                                    Showing 1-12 of 48 products
                                </p>
                                <FilterSelector />
                            </div>
                            <ShopProducts />
                            <SwitchProductsPages />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
