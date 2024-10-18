import { useState } from 'react'
import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'
import Layout from '../layout'

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('')

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Product Image"
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?height=150&width=150`}
                  alt={`Product Image ${i}`}
                  width={150}
                  height={150}
                  className="w-full rounded-lg"
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">Product Name</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(42 reviews)</span>
            </div>
            <p className="text-2xl font-bold mb-4">$99.99</p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size:</h3>
              <div className="flex space-x-2">
                {['7', '8', '9', '10', '11'].map((size) => (
                  <button
                    key={size}
                    className={`border rounded-md px-3 py-2 ${
                      selectedSize === size ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition duration-300">
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          {/* Add review components here */}
        </div>
      </div>
    </Layout>
  )
}