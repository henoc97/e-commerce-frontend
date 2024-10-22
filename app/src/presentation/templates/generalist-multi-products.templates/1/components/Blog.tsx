import { Card, CardContent } from '@/app/src/presentation/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  { title: 'Latest Fashion Trends', image: '/assets/images/blog/fashion.jpg', date: 'June 1, 2023' },
  { title: 'Tech Gadgets Review', image: '/assets/images/blog/tech.jpg', date: 'May 28, 2023' },
  { title: 'Home Decor Ideas', image: '/assets/images/blog/decor.jpg', date: 'May 25, 2023' },
]

export default function Blog() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.date}</p>
                <Link href="#" className="text-primary hover:underline">Read More</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}