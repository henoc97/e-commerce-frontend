import Link from 'next/link'
import { ShoppingCart, Search, User } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Sopa
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button aria-label="Search">
              <Search className="h-6 w-6 text-gray-600" />
            </button>
            <button aria-label="Cart">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </button>
            <button aria-label="Account">
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Shop</h3>
            <ul className="space-y-1">
              <li><Link href="/shop/men">Men</Link></li>
              <li><Link href="/shop/women">Women</Link></li>
              <li><Link href="/shop/accessories">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul className="space-y-1">
              <li><Link href="/about/story">Our Story</Link></li>
              <li><Link href="/about/materials">Materials</Link></li>
              <li><Link href="/about/sustainability">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="space-y-1">
              <li><Link href="/help/faq">FAQ</Link></li>
              <li><Link href="/help/shipping">Shipping</Link></li>
              <li><Link href="/help/returns">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Email: support@sopa.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </footer>
    </div>
  )
}