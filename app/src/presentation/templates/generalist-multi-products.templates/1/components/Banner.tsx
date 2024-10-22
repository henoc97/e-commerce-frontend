import { Button } from '@/app/src/presentation/components/ui/button'
import Image from 'next/image'

export default function Banner() {
  return (
    <section className="relative h-[450px] overflow-hidden">
      <Image 
        src="/assets/images/banner-1.jpg" 
        alt="Banner" 
        layout="fill" 
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="relative z-10 max-w-lg text-white">
          <h2 className="text-4xl font-bold mb-4">New Collection</h2>
          <p className="text-lg mb-6">Discover our latest arrivals and elevate your style.</p>
          <Button variant="default" size="lg">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  )
}