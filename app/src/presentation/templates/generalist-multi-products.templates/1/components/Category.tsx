import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { name: 'Clothing', image: '/assets/images/categories/clothing.jpg' },
  { name: 'Accessories', image: '/assets/images/categories/accessories.jpg' },
  { name: 'Footwear', image: '/assets/images/categories/footwear.jpg' },
  { name: 'Electronics', image: '/assets/images/categories/electronics.jpg' },
]

export default function Category() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link href="#" key={index} className="group">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}