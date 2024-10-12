import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Search, ChevronDown } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'


const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Electric Guitars",
    excerpt: "From the early days of amplification to modern-day shredding machines, we explore the fascinating journey of the electric guitar.",
    date: "2024-03-15",
    author: "Jane Doe",
    image: "/placeholder.svg?text=Guitar+Evolution"
  },
  {
    id: 2,
    title: "Top 10 Drumming Techniques for Beginners",
    excerpt: "Master these essential drumming techniques to kickstart your percussion journey and lay a solid foundation for your rhythmic skills.",
    date: "2024-03-10",
    author: "John Smith",
    image: "/placeholder.svg?text=Drumming+Techniques"
  },
  {
    id: 3,
    title: "The Rise of Electronic Music Production",
    excerpt: "Discover how technology has revolutionized music production and opened up new possibilities for artists around the world.",
    date: "2024-03-05",
    author: "Alex Johnson",
    image: "/placeholder.svg?text=Electronic+Music"
  },
  // Add more blog posts as needed
]

const categories = [
  "Instruments",
  "Music Theory",
  "Production",
  
  "Industry News",
  "Artist Spotlights",
  "Gear Reviews"
]

export default function Blog() {
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
              <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/blog">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#E8CDAF]">
                  Latest Insights
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Explore our collection of articles, tips, and stories from the world of music.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="grid gap-8 md:grid-cols-2">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                      <CardContent className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">
                          {post.date} | By {post.author}
                        </p>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Link href={`/blog/${post.id}`} className="text-[#00B2A9] hover:underline">
                          Read More
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <Link href={`/blog/category/${category.toLowerCase()}`} className="text-[#5B4B8A] hover:text-[#00B2A9]">
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <li key={post.id}>
                          <Link href={`/blog/${post.id}`} className="text-[#5B4B8A] hover:text-[#00B2A9]">
                            {post.title}
                          </Link>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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