import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Search, ChevronDown, Mail, Phone, MapPin } from 'lucide-react'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { toast } from '../components/ui/use-toast'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

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
              <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/contact">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#E8CDAF]">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  We're here to help. Reach out to us for any questions, concerns, or feedback.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-gray-500 md:text-xl">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                      <Input id="name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                      <Input id="email" name="email" placeholder="Enter your email" required type="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                    <Input id="subject" name="subject" placeholder="Enter the subject" required value={formData.subject} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                    <Textarea className="min-h-[100px]" id="message" name="message" placeholder="Enter your message" required value={formData.message} onChange={handleInputChange} />
                  </div>
                  <Button type="submit" className="w-full bg-[#00B2A9] text-white">Send Message</Button>
                </form>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-[#00B2A9]" />
                        <span>support@musicland.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-[#00B2A9]" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-[#00B2A9]" />
                        <span>123 Music Street, Nashville, TN 37203</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.3439506339903!2d-86.77919968473958!3d36.15949918008336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466579b6da269%3A0x7b1f3b0b12e71a8b!2sNashville%2C%20TN%2037203!5e0!3m2!1sen!2sus!4v1623344496096!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
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