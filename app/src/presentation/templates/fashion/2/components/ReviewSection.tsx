import { CardContent } from "@/app/src/presentation/components/ui/card"
import { Card } from "@/app/src/presentation/components/ui/card"

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    image: '/placeholder.svg?height=100&width=100',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias possimus quisquam rerum temporibus ipsum voluptate accusamus, unde ab asperiores? Exercitationem, unde rem.',
    rating: 4,
  },
  // Add more reviews here
]

export default function ReviewSection() {
  return (
    <section className="py-16" id="review">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">customer's <span className="text-orange-500">review</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6 text-center">
                <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <p className="text-gray-600 mb-4">{review.review}</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}