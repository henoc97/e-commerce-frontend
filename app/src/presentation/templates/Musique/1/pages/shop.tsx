import { useState } from 'react';

import Categories from '../components/shop.component/aside/categories';
import PriceRangeSlider from '../components/shop.component/aside/price-range-slider';
import ShopProducts from '../components/shop.component/section/shop-products';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Button } from '../components/ui/button';

export default function Shop() {
    const [priceRange, setPriceRange] = useState([0, 1000]);

    return (
        <div className="flex flex-col min-h-screen bg-[#5B4B8A]">
            
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
                                <Select defaultValue="featured">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="featured">
                                            Featured
                                        </SelectItem>
                                        <SelectItem value="price-asc">
                                            Price: Low to High
                                        </SelectItem>
                                        <SelectItem value="price-desc">
                                            Price: High to Low
                                        </SelectItem>
                                        <SelectItem value="newest">
                                            Newest Arrivals
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <ShopProducts />
                            <div className="flex justify-center mt-8">
                                <Button variant="outline" className="mx-1">
                                    Previous
                                </Button>
                                {[1, 2, 3, 4].map((page) => (
                                    <Button
                                        key={page}
                                        variant={
                                            page === 1 ? 'default' : 'outline'
                                        }
                                        className="mx-1"
                                    >
                                        {page}
                                    </Button>
                                ))}
                                <Button variant="outline" className="mx-1">
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
}
