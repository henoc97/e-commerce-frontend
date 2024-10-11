import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Search, ChevronDown, Star, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
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
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/shop">
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#5B4B8A]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#E8CDAF]">
                  Discover Your Sound
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Explore our vast collection of instruments, gear, and accessories to find your perfect musical match.
                </p>
              </div>
              <Button className="bg-[#00B2A9] text-white">Shop Now</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((product) => (
                <Card key={product} className="overflow-hidden">
                  <Image
                    src={`/placeholder.svg?text=Product+${product}`}
                    alt={`Product ${product}`}
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
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E8CDAF]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5B4B8A]">
                20% Off All Vinyl!
              </h2>
              <p className="mx-auto max-w-[600px] text-[#5B4B8A] md:text-xl">
                Expand your collection with our amazing vinyl selection. Limited time offer!
              </p>
              <Button className="bg-[#00B2A9] text-white">Shop Vinyl</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <Card key={testimonial} className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={`/placeholder.svg?text=User+${testimonial}`}
                      alt={`User ${testimonial}`}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#E8CDAF] text-[#E8CDAF]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Musicland has an incredible selection and top-notch customer service. I couldn't be happier with my purchase!"
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E8CDAF]">
                Stay in Tune with Our Newsletter
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                Get the latest news, exclusive offers, and music inspiration delivered straight to your inbox.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-white text-[#5B4B8A]"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button className="bg-[#00B2A9] text-white" type="submit">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
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