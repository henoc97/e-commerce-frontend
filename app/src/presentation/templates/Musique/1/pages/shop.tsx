import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Search, ChevronDown, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function Shop() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="flex flex-col min-h-screen bg-[#5B4B8A]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image src="/placeholder.svg" alt="Musicland Logo" width={32} height={32} />
              <span className="hidden font-bold sm:inline-block">Musicland</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
                Home
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/shop">
                Shop
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/about">
                About Us
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/contact">
                Contact
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/blog">
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products" className="pl-8" type="search" />
              </div>
            </div>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#00B2A9] text-[10px] font-bold text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-white">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-1/4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Categories</h2>
                  <div className="space-y-2">
                    {['Guitars', 'Drums', 'Keyboards', 'Accessories'].map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Price Range</h2>
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
                <p className="text-sm text-gray-500">Showing 1-12 of 48 products</p>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
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
                      <h3 className="font-semibold text-lg mb-2">Product Name</h3>
                      <p className="text-[#5B4B8A] font-bold mb-2">$199.99</p>
                      <Button className="w-full bg-[#00B2A9] text-white">Add to Cart</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mx-1">Previous</Button>
                {[1, 2, 3, 4].map((page) => (
                  <Button key={page} variant={page === 1 ? "default" : "outline"} className="mx-1">
                    {page}
                  </Button>
                ))}
                <Button variant="outline" className="mx-1">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-6 bg-[#5B4B8A] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-2 text-[#E8CDAF]">Shop</h3>
              <ul className="space-y-1">
                <li><Link href="/shop/guitars" className="hover:text-[#00B2A9]">Guitars</Link></li>
                <li><Link href="/shop/drums" className="hover:text-[#00B2A9]">Drums</Link></li>
                <li><Link href="/shop/keyboards" className="hover:text-[#00B2A9]">Keyboards</Link></li>
                <li><Link href="/shop/accessories" className="hover:text-[#00B2A9]">Accessories</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-2 text-[#E8CDAF]">About</h3>
              <ul className="space-y-1">
                <li><Link href="/about" className="hover:text-[#00B2A9]">Our Story</Link></li>
                <li><Link href="/careers" className="hover:text-[#00B2A9]">Careers</Link></li>
                <li><Link href="/press" className="hover:text-[#00B2A9]">Press</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-2 text-[#E8CDAF]">Support</h3>
              <ul className="space-y-1">
                <li><Link href="/contact" className="hover:text-[#00B2A9]">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-[#00B2A9]">FAQs</Link></li>
                <li><Link href="/shipping" className="hover:text-[#00B2A9]">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-[#00B2A9]">Returns</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-2 text-[#E8CDAF]">Connect</h3>
              <ul className="space-y-1">
                <li><Link href="https://facebook.com" className="hover:text-[#00B2A9]">Facebook</Link></li>
                <li><Link href="https://twitter.com" className="hover:text-[#00B2A9]">Twitter</Link></li>
                <li><Link href="https://instagram.com" className="hover:text-[#00B2A9]">Instagram</Link></li>
                <li><Link href="https://youtube.com" className="hover:text-[#00B2A9]">YouTube</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 Musicland. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#00B2A9]">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-[#00B2A9]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}