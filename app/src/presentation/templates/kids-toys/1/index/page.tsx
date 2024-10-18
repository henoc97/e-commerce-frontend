import Image from "next/image"
import Link from "next/link"
import { Star, ChevronRight } from "lucide-react"
import { Input } from "@/app/src/presentation/components/ui/input"
import { Button } from "@/app/src/presentation/components/ui/button"
import { Card, CardContent } from "@/app/src/presentation/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Image src="/placeholder.svg?height=40&width=120" alt="Keedos Logo" width={120} height={40} />
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Brands</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Best Sellers</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64" />
            <Button variant="ghost">Sign In</Button>
            <Button variant="ghost">Cart (0)</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Iconic Supersonic</h1>
          <p className="text-xl mb-6">Bring an endless supply to life with new Keedos Icons Collection</p>
          <Button>Shop Now</Button>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Top Toy Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {["Indoor Play", "Games & Puzzles", "Books", "Steam Toys", "Rockers & Ride", "Outdoor Play"].map((category) => (
              <Card key={category} className="text-center">
                <CardContent className="p-4">
                  <Image src="/placeholder.svg?height=64&width=64" alt={category} width={64} height={64} className="mx-auto mb-2" />
                  <p className="text-sm">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Most popular toys</h2>
            <Button variant="link">Explore More <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Kids Metal Airplane", price: 299.99, rating: 5, image: "/placeholder.svg?height=200&width=200" },
              { name: "Chevrolet Corvette 1981", price: 319.99, rating: 4, image: "/placeholder.svg?height=200&width=200" },
              { name: "Wall Disney Tribute Camera", price: 19.99, rating: 5, image: "/placeholder.svg?height=200&width=200" },
              { name: "3D Realistic Desk View", price: 20.81, rating: 4, image: "/placeholder.svg?height=200&width=200" },
            ].map((product) => (
              <Card key={product.name}>
                <CardContent className="p-4">
                  <Image src={product.image} alt={product.name} width={200} height={200} className="mb-2" />
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center mb-1">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">The play room needs an overhaul!</h2>
              <p className="mb-4">Turn your children's playroom into a dream play-learning, and creative space with our curated selection of educational toys that a playroom should provide.</p>
              <Button>Shop Now</Button>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg?height=300&width=500" alt="Playroom" width={500} height={300} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Top deals just for you today</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Wall Disney Tribute Camera", price: 300.00, oldPrice: 350.00, rating: 5, image: "/placeholder.svg?height=200&width=200" },
              { name: "Tranquil Garden", price: 19.00, oldPrice: 25.00, rating: 4, image: "/placeholder.svg?height=200&width=200" },
              { name: "Hokusai - The Great Wave", price: 99.99, oldPrice: 120.00, rating: 5, image: "/placeholder.svg?height=200&width=200" },
              { name: "Kids Metal Airplane", price: 299.99, oldPrice: 350.00, rating: 5, image: "/placeholder.svg?height=200&width=200" },
              { name: "Great Pyramid of Giza", price: 109.99, oldPrice: 130.00, rating: 4, image: "/placeholder.svg?height=200&width=200" },
            ].map((product) => (
              <Card key={product.name}>
                <CardContent className="p-4">
                  <Image src={product.image} alt={product.name} width={200} height={200} className="mb-2" />
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center mb-1">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-bold">${product.price.toFixed(2)} <span className="text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Top brands of toys</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Hot Wheels", "Thomas & Friends", "Barbie", "Power Wheels", "Fisher Price", "Little People", "Wolfum"].map((brand) => (
              <div key={brand} className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-center">{brand}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe & start buying</h2>
          <p className="mb-4">Get our exclusive membership, access to our bestselling, and the newest products before they sell out.</p>
          <div className="flex justify-center">
            <Input type="email" placeholder="Your email address" className="w-64 mr-2" />
            <Button>Subscribe</Button>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-2">About Us</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About the Keedos</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Sustainability</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Keedos News</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Replacement parts</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Shipping & Returns</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Payment Methods</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Attractions</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Keedos House</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Keedos land Parks</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Discovery Centers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Keedos Stores</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">More From Us</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Keedos Education</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Keedos Ideas</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Affiliate Program</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Student Offers</Link></li>
              </ul>
            </div>
            <div>
              <Image src="/placeholder.svg?height=40&width=120" alt="Keedos Logo" width={120} height={40} className="mb-4" />
              <div className="flex space-x-2 mb-4">
                <Link href="#" className="text-gray-400 hover:text-gray-900">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-900">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643  0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-900">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-gray-500">&copy; 2023 Keedos, Inc. All rights reserved.</p>
            <div className="flex space-x-4">
              <Image src="/placeholder.svg?height=30&width=50" alt="Payment Method" width={50} height={30} />
              <Image src="/placeholder.svg?height=30&width=50" alt="Payment Method" width={50} height={30} />
              <Image src="/placeholder.svg?height=30&width=50" alt="Payment Method" width={50} height={30} />
              <Image src="/placeholder.svg?height=30&width=50" alt="Payment Method" width={50} height={30} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}