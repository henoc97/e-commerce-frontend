import { Button } from '@/app/src/presentation/components/ui/button'
import { Card, CardContent } from '@/app/src/presentation/components/ui/card'
import Image from 'next/image'

export default function TestimonialsCTAService() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What Our Customers Say</h3>
              <div className="flex items-center mb-4">
                <Image src="/assets/images/avatar.jpg" alt="Customer" width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-600">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-700">"Great products and excellent service. I'm a happy customer!"</p>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-bold mb-4">Summer Sale</h3>
              <p className="text-center mb-6">Get up to 50% off on selected items. Limited time offer!</p>
              <Button variant="secondary">Shop Now</Button>
            </CardContent>
          </Card>

          {/* Service */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Free Shipping
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  24/7 Support
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Money-back Guarantee
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}