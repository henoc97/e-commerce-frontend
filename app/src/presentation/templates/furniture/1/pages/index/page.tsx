import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, ShoppingCart, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/app/src/presentation/components/ui/button'
import { Card, CardContent } from '@/app/src/presentation/components/ui/card'
import { Input } from '@/app/src/presentation/components/ui/input'

export default function HomePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F8F8F8] text-[#4B4B4B]' : 'bg-[#1A1A1A] text-[#F8F8F8]'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Yudoo</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/shop" className="hover:text-[#D4AF65] transition-colors">Shop</Link>
            <Link href="/collections" className="hover:text-[#D4AF65] transition-colors">Collections</Link>
            <Link href="/about" className="hover:text-[#D4AF65] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#D4AF65] transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <Link href="/cart" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Modern living room"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Design Your Perfect Space</h1>
          <p className="text-xl mb-8">Explore minimalist designs that bring elegance to your home</p>
          <Button size="lg" className="bg-[#D4AF65] hover:bg-[#C19E55] text-white">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Living Room', 'Bedroom', 'Dining Room', 'Office'].map((room) => (
              <Link href={`/collections/${room.toLowerCase().replace(' ', '-')}`} key={room} className="group">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={`${room} furniture`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-semibold">{room}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Best Sellers</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card key={item} className="flex-shrink-0 w-64">
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={`Product ${item}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">Modern Chair</h3>
                  <p className="text-lg font-bold mb-2">$199.99</p>
                  <Button className="w-full bg-[#D4AF65] hover:bg-[#C19E55] text-white">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
          <p className="text-center mb-8">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <form className="flex space-x-4">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button type="submit" className="bg-[#D4AF65] hover:bg-[#C19E55] text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4AF65]"><Facebook /></a>
              <a href="#" className="hover:text-[#D4AF65]"><Instagram /></a>
              <a href="#" className="hover:text-[#D4AF65]"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
          <p>&copy; 2024 Yudoo Furniture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}