import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Play, ShoppingCart, Search } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-md container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Furnimart<span className="text-orange-500">.</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/shop" className="text-gray-600 hover:text-gray-900">SHOP</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">ABOUT</Link>
          <Link href="/collections" className="text-gray-600 hover:text-gray-900">COLLECTIONS</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">BLOG</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">CONTACT</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button aria-label="Cart" className="text-gray-600 hover:text-gray-900">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button aria-label="Search" className="text-gray-600 hover:text-gray-900">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-6xl font-bold mb-4">Unpack Your Style</h1>
            <p className="text-xl text-gray-600 mb-6">
              Our bags are crafted to blend timeless style with everyday functionality, ensuring you're always prepared
            </p>
            <div className="flex space-x-4">
              <Link href="/shop" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
                See all
              </Link>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300 flex items-center">
                <Play className="h-5 w-5 mr-2" /> Play Video
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="White and orange backpack"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold mb-2">$768.00</div>
              <div className="flex space-x-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-500"></span>
                <span className="w-6 h-6 rounded-full bg-green-500"></span>
                <span className="w-6 h-6 rounded-full bg-orange-500"></span>
                <span className="w-6 h-6 rounded-full bg-black"></span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">4.8</span>
                <span className="text-gray-600">/5</span>
              </div>
              <div className="text-sm text-gray-600">Explore our TrustScore & Customer Reviews</div>
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex justify-center space-x-8">
            {[
              { color: 'bg-yellow-100', price: '$120' },
              { color: 'bg-purple-100', price: '$220' },
              { color: 'bg-green-100', price: '$320' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-8 rounded-3xl relative`}>
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={`Backpack ${index + 1}`}
                  width={200}
                  height={200}
                  className="mb-4"
                />
                <div className="text-xl font-bold">{item.price}</div>
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </main>
    </div>
  )
}