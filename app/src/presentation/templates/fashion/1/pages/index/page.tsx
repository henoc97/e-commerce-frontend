'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Link as LinkIcon, Moon, Sun, ShoppingCart } from "lucide-react"
import { useTheme } from "next-themes"
import { Card, CardContent } from "@/app/src/presentation/components/ui/card"
import { Button } from "@/app/src/presentation/components/ui/button"
import { Input } from "@/app/src/presentation/components/ui/input"
import { ThemeSwitcher } from "../../components/theme-switcher"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      {/* Notification Bar */}
      <div className="bg-primary/10 py-2 text-center text-sm font-medium">
        Free shipping on orders over $50!
      </div>

      {/* Navigation Header */}
      <header className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-serif font-bold">
          GlowSkin
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {["Home", "Products", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
            <ShoppingCart className="h-5 w-5 mr-1" />
            Cart (0)
          </button>
          <ThemeSwitcher />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-primary/5 overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Luxury+Skincare+Product"
          alt="Luxury skincare product"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-30">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Glow Like Never Before
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl px-4">
            Discover our premium skincare range, crafted with natural ingredients to reveal your skin's true radiance
          </p>
          <div className="space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Shop Now
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Our Bestsellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Radiance Serum", price: 39.99, description: "Brightens and evens skin tone" },
            { name: "Hydra-Boost Moisturizer", price: 45.99, description: "24-hour hydration for all skin types" },
            { name: "Gentle Cleansing Foam", price: 24.99, description: "Removes impurities without drying" }
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden group">
              <Image
                src={`/placeholder.svg?height=300&width=300&text=${product.name}`}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <CardContent className="p-4">
                <h3 className="font-serif font-bold text-lg mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">${product.price}</span>
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Cleansers", "Serums", "Moisturizers"].map((category) => (
            <div key={category} className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src={`/placeholder.svg?height=300&width=400&text=${category}`}
                alt={category}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity group-hover:bg-opacity-60">
                <h3 className="text-2xl font-serif font-bold text-white">
                  {category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Natural+Skincare+Ingredients"
              alt="Natural skincare ingredients"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-6">
              At GlowSkin, we believe in the power of nature and science combined. Our mission is to provide you with premium skincare products that are not only effective but also kind to your skin and the environment. We use only the finest natural ingredients, backed by cutting-edge research, to help you achieve your best skin ever.
            </p>
            <Link href="#" className="font-bold hover:underline text-primary">
              Learn More About Our Ingredients
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", text: "I've been using GlowSkin products for a month now, and I can already see a significant improvement in my skin's texture and glow. Highly recommended!" },
              { name: "Michael R.", text: "As someone with sensitive skin, I'm always cautious about trying new products. GlowSkin's gentle formulas have been a game-changer for my skincare routine." },
              { name: "Emma T.", text: "The Radiance Serum is my holy grail product! It's lightweight, absorbs quickly, and gives my skin an amazing glow. I'm a customer for life!" }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={`/placeholder.svg?height=50&width=50&text=${testimonial.name}`}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">Verified Buyer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary/5 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-serif font-bold">
              GlowSkin
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Website">
                <LinkIcon size={24} />
              </Link>
            </div>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <form className="flex flex-col sm:flex-row justify-center items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 mb-2 sm:mb-0 sm:mr-2"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              Subscribe to Our Newsletter
            </Button>
          </form>
        </div>
      </footer>
    </div>
  )
}