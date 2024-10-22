
import { Button } from '@/app/src/presentation/components/ui/button'
import { Card, CardContent, CardFooter } from '@/app/src/presentation/components/ui/card'
import { Input } from '@/app/src/presentation/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'

export default function BeautySalonLandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-md container mx-auto py-4 flex justify-between items-center">
        <Image src="/placeholder.svg" alt="Logo" width={100} height={50} />
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>
        <Button variant="outline" className="bg-[#8B1E3F] text-white hover:bg-[#8B1E3F]/90">Login</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Do it for the after selfie, do it for YOU</h1>
          <p className="text-gray-600">Experience the best in skincare and beauty treatments.</p>
          <Button className="bg-[#8B1E3F] text-white hover:bg-[#8B1E3F]/90">Book Now</Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image src="/placeholder.svg" alt="Beautiful woman" width={500} height={500} className="rounded-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Botox', 'Fillers', 'Micro Needling', 'PRP/Scalp', 'Chemical Peel'].map((service, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <Image src="/placeholder.svg" alt={service} width={300} height={200} className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Promotional Sections */}
      <section className="bg-[#8B1E3F] text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Live a better lifestyle, your way</h2>
            <p>Discover our range of treatments tailored to your needs.</p>
            <Button variant="outline" className="bg-white text-[#8B1E3F] hover:bg-gray-100">Explore Treatments</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src="/placeholder.svg" alt="Lifestyle" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mt-8 md:mt-0 md:order-1">
          <Image src="/placeholder.svg" alt="Beauty" width={500} height={300} className="rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Beauty is in the eye of the beholder, grab a mirror</h2>
          <p className="text-gray-600">Enhance your natural beauty with our expert treatments.</p>
          <Button className="bg-[#8B1E3F] text-white hover:bg-[#8B1E3F]/90">Book Consultation</Button>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meet our Skin Care Specialists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center">
              <Image src="/placeholder.svg" alt={`Team member ${member}`} width={150} height={150} className="rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">Dr. Jane Doe</h3>
              <p className="text-gray-600">Dermatologist</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#8B1E3F] text-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What people say about us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((testimonial) => (
              <Card key={testimonial} className="bg-white text-gray-800 p-6">
                <p className="mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."</p>
                <div className="flex items-center">
                  <Image src="/placeholder.svg" alt={`Client ${testimonial}`} width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-gray-600">Happy Customer</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Watch our Instagram gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <Image key={img} src="/placeholder.svg" alt={`Instagram ${img}`} width={300} height={300} className="rounded-lg" />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B1E3F] text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p>123 Beauty Street</p>
            <p>Skincare City, SC 12345</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Email</h3>
            <p>info@beautysalon.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="mr-2" />
              <Button type="submit" className="bg-white text-[#8B1E3F] hover:bg-gray-100">Subscribe</Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}