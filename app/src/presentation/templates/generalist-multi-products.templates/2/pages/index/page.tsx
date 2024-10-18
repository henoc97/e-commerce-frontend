
import { Button } from "@/app/src/presentation/components/ui/button"
import { Input } from "@/app/src/presentation/components/ui/input"
import { ShoppingCart, Heart, User, Search, ChevronDown, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function EcommerceLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">BestBuy</h1>
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search for products" 
                className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost"><ShoppingCart /></Button>
            <Button variant="ghost"><Heart /></Button>
            <Button variant="ghost"><User /></Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 flex">
        {/* Sidebar */}
        <aside className="w-64 pr-8">
          <nav>
            <ul className="space-y-2">
              <li><Button variant="ghost" className="w-full justify-start"><ChevronDown className="mr-2" />Electronics</Button></li>
              <li><Button variant="ghost" className="w-full justify-start"><ChevronDown className="mr-2" />Computers</Button></li>
              <li><Button variant="ghost" className="w-full justify-start"><ChevronDown className="mr-2" />Smart Home</Button></li>
              <li><Button variant="ghost" className="w-full justify-start"><ChevronDown className="mr-2" />Automotive</Button></li>
              {/* Add more categories as needed */}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Black Friday Banner */}
          <div className="bg-purple-600 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">Black Friday Sonic Extravaganza</h2>
            <p className="mb-4">Enjoy up to 40% off on selected items</p>
            <Button className="bg-orange-500 hover:bg-orange-600">Shop Now</Button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <Image src="/placeholder.svg" alt="Product" width={200} height={200} className="w-full h-48 object-cover mb-4" />
                <h3 className="font-semibold mb-2">Product Name</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(123)</span>
                </div>
                <p className="text-lg font-bold mb-2">$99.99</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
              </div>
            ))}
          </div>

          {/* Smartwatch Banner */}
          <div className="bg-yellow-400 p-6 rounded-lg flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Smartwatch Model 5</h2>
              <p className="mb-4">Tap into Fitness</p>
              <Button className="bg-black text-white hover:bg-gray-800">Shop Now</Button>
            </div>
            <Image src="/placeholder.svg" alt="Smartwatch" width={150} height={150} className="rounded-full" />
          </div>

          {/* Latest Articles */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
                  <Image src="/placeholder.svg" alt="Article" width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Article Title</h3>
                    <p className="text-sm text-gray-600 mb-4">Short description of the article goes here...</p>
                    <Button variant="link" className="text-orange-500 hover:text-orange-600 p-0">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BestBuy</h3>
            <p className="text-sm text-gray-400">Your one-stop shop for all things tech.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with our latest offers</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-l-md" />
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}