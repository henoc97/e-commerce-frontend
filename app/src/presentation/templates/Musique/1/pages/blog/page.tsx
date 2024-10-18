import { Layout } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '../../../../../components/ui/card'
import { Button } from '../../../../../components/ui/button'


const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Electric Guitars",
    excerpt: "From the early days of amplification to modern-day shredding machines, we explore the fascinating journey of the electric guitar.",
    date: "2024-03-15",
    author: "Jane Doe",
    image: "/placeholder.svg?text=Guitar+Evolution"
  },
  {
    id: 2,
    title: "Top 10 Drumming Techniques for Beginners",
    excerpt: "Master these essential drumming techniques to kickstart your percussion journey and lay a solid foundation for your rhythmic skills.",
    date: "2024-03-10",
    author: "John Smith",
    image: "/placeholder.svg?text=Drumming+Techniques"
  },
  {
    id: 3,
    title: "The Rise of Electronic Music Production",
    excerpt: "Discover how technology has revolutionized music production and opened up new possibilities for artists around the world.",
    date: "2024-03-05",
    author: "Alex Johnson",
    image: "/placeholder.svg?text=Electronic+Music"
  },
  // Add more blog posts as needed
]

const categories = [
  "Instruments",
  "Music Theory",
  "Production",
  
  "Industry News",
  "Artist Spotlights",
  "Gear Reviews"
]

export default function Blog() {
  return (
    <Layout>
      <main className="flex-1 bg-white">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#E8CDAF]">
                  Latest Insights
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Explore our collection of articles, tips, and stories from the world of music.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="grid gap-8 md:grid-cols-2">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                      <CardContent className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">
                          {post.date} | By {post.author}
                        </p>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Link href={`/blog/${post.id}`} className="text-[#00B2A9] hover:underline">
                          Read More
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <Link href={`/blog/category/${category.toLowerCase()}`} className="text-[#5B4B8A] hover:text-[#00B2A9]">
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <li key={post.id}>
                          <Link href={`/blog/${post.id}`} className="text-[#5B4B8A] hover:text-[#00B2A9]">
                            {post.title}
                          </Link>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}