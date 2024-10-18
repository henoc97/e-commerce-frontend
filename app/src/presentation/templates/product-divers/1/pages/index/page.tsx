import Image from 'next/image'
import Link from 'next/link'
import Layout from '../layout'

export default function HomePage() {
  return (
    <Layout>
      <section className="relative h-[80vh]">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Step into the future, comfortably</h1>
            <p className="text-xl mb-8">Discover our latest collection of innovative footwear</p>
            <Link
              href="/shop"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={`Product ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Product Name</h3>
                  <p className="text-gray-600 mb-4">$99.99</p>
                  <Link
                    href={`/product/${i}`}
                    className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}