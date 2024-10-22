'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/app/src/presentation/components/ui/button'

const slides = [
  {
    title: 'nike red shoes',
    subtitle: 'nike metcon shoes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.',
    image: '/placeholder.svg?height=300&width=300',
    background: '/placeholder.svg?height=600&width=1200',
  },
  // Add more slides here
]

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${slides[currentSlide].background})`}}>
      <div className="container mx-auto px-4 py-20 flex items-center">
        <div className="w-1/2">
          <span className="text-2xl text-orange-500">{slides[currentSlide].title}</span>
          <h3 className="text-5xl font-bold mt-2 mb-4">{slides[currentSlide].subtitle}</h3>
          <p className="text-lg mb-6">{slides[currentSlide].description}</p>
          <Button>add to cart</Button>
        </div>
        <div className="w-1/2">
          <img src={slides[currentSlide].image} alt="Shoe" className="w-full transform -rotate-35" />
        </div>
      </div>
      <Button variant="outline" className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button variant="outline" className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  )
}