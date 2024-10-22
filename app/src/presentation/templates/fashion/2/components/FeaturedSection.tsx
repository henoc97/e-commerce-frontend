'use client'

import { Button } from '@/app/src/presentation/components/ui/button'
import { Card, CardContent } from '@/app/src/presentation/components/ui/card'
import { useState } from 'react'

const featuredProducts = [
  {
    id: 1,
    name: 'new nike airmax shoes',
    images: [
      '/placeholder.svg?height=100&width=100',
      '/placeholder.svg?height=100&width=100',
      '/placeholder.svg?height=100&width=100',
      '/placeholder.svg?height=100&width=100',
    ],
    price: 80.99,
    originalPrice: 120.99,
    rating: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis praesentium odit voluptas illum iure libero quis fuga  commodi. Autem.',
  },
  // Add more featured products here
]

export default function FeaturedSection() {
  const [selectedImage, setSelectedImage] = useState(featuredProducts[0].images[0])

  return (
    <section className="py-16 bg-gray-100" id="featured">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12"><span className="text-orange-500">featured</span> products</h2>
        {featuredProducts.map((product) => (
          <Card key={product.id} className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <img src={selectedImage} alt={product.name} className="w-full h-64 object-contain mb-4" />
                  <div className="flex justify-center space-x-4">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-16 h-16 object-cover cursor-pointer border-2 border-transparent hover:border-orange-500"
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="text-2xl font-bold mb-4">${product.price} <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span></div>
                  <Button>add to cart</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}