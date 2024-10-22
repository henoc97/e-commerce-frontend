import { Button } from '@/app/src/presentation/components/ui/button'
import { Card, CardContent } from '@/app/src/presentation/components/ui/card'
import Image from 'next/image'

const products = [
  { name: 'Product 1', price: 19.99, image: '/assets/images/products/product-1.jpg' },
  { name: 'Product 2', price: 29.99, image: '/assets/images/products/product-2.jpg' },
  { name: 'Product 3', price: 39.99, image: '/assets/images/products/product-3.jpg' },
  { name: 'Product 4', price: 49.99, image: '/assets/images/products/product-4.jpg' },
]

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}