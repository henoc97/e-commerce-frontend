import Image from 'next/image'
import Link from 'next/link'
import { Menu, ShoppingCart } from 'lucide-react'
import { Button } from '@/app/src/presentation/components/ui/button'

const collections = [
  { name: 'Living Room', image: '/placeholder.svg?height=600&width=800', description: 'Cozy and stylish living room furniture' },
  { name: 'Bedroom', image: '/placeholder.svg?height=600&width=800', description: 'Comfortable and elegant bedroom sets' },
  { name: 'Dining Room', image: '/placeholder.svg?height=600&width=800', description: 'Beautiful dining tables and chairs' },
  { name: 'Office', image: '/placeholder.svg?height=600&width=800', description: 'Productive and modern office furniture' },
  { name: 'Outdoor', image: '/placeholder.svg?height=600&width=800', description: 'Durable and stylish outdoor furniture' },
  { name: 'Kids', image: '/placeholder.svg?height=600&width=800', description: 'Fun and functional furniture for children' },
]

export default function CollectionsPage() {
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

      {/* Collections Grid */}
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Collections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.name} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <Image
                src={collection.image}
                alt={collection.name}
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{collection.name}</h2>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <Link href={`/collections/${collection.name.toLowerCase().replace(' ', '-')}`}>
                  <Button className="w-full bg-[#D4AF65] hover:bg-[#C19E55] text-white">
                    View Collection
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Yudoo Furniture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}