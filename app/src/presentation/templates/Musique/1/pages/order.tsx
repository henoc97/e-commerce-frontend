import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Search, ChevronDown } from 'lucide-react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Card, CardContent } from '../components/ui/card'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import { Textarea } from '../components/ui/textarea'
import { toast } from '../components/ui/use-toast'
import { Button } from '../components/ui/button'


interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
}

export default function Order() {
  const [orderItems] = useState<OrderItem[]>([
    { id: 1, name: "Electric Guitar", price: 599.99, quantity: 1 },
    { id: 2, name: "Acoustic Drum Set", price: 799.99, quantity: 1 },
    { id: 3, name: "Digital Piano", price: 1299.99, quantity: 1 },
  ])

  const [shippingMethod, setShippingMethod] = useState("standard")

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = shippingMethod === "express" ? 25 : 10
  const tax = subtotal * 0.08 // Assuming 8% tax rate
  const total = subtotal + shippingCost + tax

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the order data to your backend
    console.log("Order submitted")
    toast({
      title: "Order Placed",
      description: "Your order has been successfully placed. Thank you for shopping with us!",
    })
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
                {orderItems.length}
              </span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-white">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Complete Your Order</h1>
            <form onSubmit={handleSubmit} className="grid gap-10 md:grid-cols-2">
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">Zip Code</Label>
                          <Input id="zipCode" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Shipping Method</h2>
                    <RadioGroup defaultValue="standard" onValueChange={setShippingMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">Standard Shipping ($10)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express">Express Shipping ($25)</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                    <Textarea placeholder="Add any special instructions or notes for your order" />
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2">
                      {orderItems.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span>{item.name} (x{item.quantity})</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>${shippingCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-2">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <Button type="submit" className="w-full mt-6 bg-[#00B2A9] text-white">
                      Place Order
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </form>
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