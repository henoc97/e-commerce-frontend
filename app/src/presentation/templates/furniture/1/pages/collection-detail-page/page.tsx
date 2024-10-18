import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, ShoppingCart, ChevronLeft } from 'lucide-react'
import { Card } from '@/app/src/presentation/components/ui/card'
import { CardContent } from '@/app/src/presentation/components/ui/card'
import { Button } from '@/app/src/presentation/components/ui/button'
import { Select, SelectContent, SelectValue, SelectItem } from '@/app/src/presentation/components/ui/select'
import { SelectTrigger } from '@/app/src/presentation/components/ui/select'

// This would typically come from a database or API
const furnitureItems = [
  { id: 1, name: 'Modern Sofa', price: 1299.99, image: '/placeholder.svg?height=400&width=600' },
  { id: 2, name: 'Leather Armchair', price: 799.99, image: '/placeholder.svg?height=400&width=600' },
  { id: 3, name: 'Glass Coffee Table', price: 349.99, image: '/placeholder.svg?height=400&width=600' },
  { id: 4, name: 'Floor Lamp', price: 129.99, image: '/placeholder.svg?height=400&width=600' },
  { id: 5, name: 'Bookshelf', price: 599.99, image: '/placeholder.svg?height=400&width=600' },
  { id: 6, name: 'TV Stand', price: 449.99, image: '/placeholder.svg?height=400&width=600' },
]

export default function CollectionDetailPage() {
  const [sortOrder, setSortOrder] = useState('featured')

  const sortedItems = [...furnitureItems].sort((a, b) => {
    if (sortOrder === 'price-asc') return a.price - b.price
    if (sortOrder === 'price-desc') return b.price - a.price
    return 0 // 'featured' order
  })

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#4B4B4B]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Yudoo</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/shop" className="hover:text-[#D4AF65] transition-colors">Shop</Link>
            <Link href="/collections" className="text-[#D4AF65]">Collections</Link>
            <Link href="/about" className="hover:text-[#D4AF65] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#D4AF65] transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-200 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/collections" className="flex items-center text-[#D4AF65] hover:underline">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Collections
            </Link>
            <h1 className="text-3xl font-bold">Living Room Collection</h1>
          </div>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-lg font-bold mb-4">${item.price.toFixed(2)}</p>
                <Button className="w-full bg-[#D4AF65] hover:bg-[#C19E55] text-white">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Yudoo</h3>
              <p>Crafting elegant, modern furniture designs for your perfect space.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-[#D4AF65]">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-[#D4AF65]">Shipping & Returns</Link></li>
                <li><Link href="/faq" className="hover:text-[#D4AF65]">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/shop" className="hover:text-[#D4AF65]">Shop All</Link></li>
                <li><Link href="/collections" className="hover:text-[#D4AF65]">Collections</Link></li>
                <li><Link href="/about" className="hover:text-[#D4AF65]">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <p>Follow us on social media for the latest updates and inspiration.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <p>&copy; 2024 Yudoo Furniture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}