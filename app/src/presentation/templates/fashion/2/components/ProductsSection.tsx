
import { Card } from '@/app/src/presentation/components/ui/card'
import { Button } from '@/app/src/presentation/components/ui/button'
import { CardContent } from '@/app/src/presentation/components/ui/card'
import { Heart, Share2, Eye } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Nike Shoes',
    image: '/placeholder.svg?height=200&width=200',
    price: 120.99,
    originalPrice: 150.99,
    rating: 4,
  },
  // Add more products here
]

export default function ProductsSection() {
  return (
    <section className="py-16" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">latest <span className="text-orange-500">products</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="relative overflow-hidden group">
              <div className="absolute top-4 left-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="secondary">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-6">
                <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold">${product.price} <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span></div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <Button className="w-full">add to cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}