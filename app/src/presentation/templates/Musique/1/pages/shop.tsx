import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Search, ChevronDown, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

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
                                <div>()
                                    <h2 className="text-lg font-semibold mb-2">
                                        Categories
                                    </h2>
                                    <div className="space-y-2">
                                        {[
                                            'Guitars',
                                            'Drums',
                                            'Keyboards',
                                            'Accessories',
                                        ].map((category) => (
                                            <div
                                                key={category}
                                                className="flex items-center"
                                            >
                                                <Checkbox id={category} />
                                                <label
                                                    htmlFor={category}
                                                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {category}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">
                                        Price Range
                                    </h2>
                                    <Slider
                                        defaultValue={[0, 1000]}
                                        max={1000}
                                        step={1}
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                    />
                                    <div className="flex justify-between mt-2">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                </div>
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[...Array(12)].map((_, i) => (
                                    <Card key={i} className="overflow-hidden">
                                        <Image
                                            src={`/placeholder.svg?text=Product+${i + 1}`}
                                            alt={`Product ${i + 1}`}
                                            width={300}
                                            height={200}
                                            className="object-cover w-full"
                                        />
                                        <CardContent className="p-4">
                                            <h3 className="font-semibold text-lg mb-2">
                                                Product Name
                                            </h3>
                                            <p className="text-[#5B4B8A] font-bold mb-2">
                                                $199.99
                                            </p>
                                            <Button className="w-full bg-[#00B2A9] text-white">
                                                Add to Cart
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
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
