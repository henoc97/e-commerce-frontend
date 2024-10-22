import { Truck, RotateCcw, Headphones } from 'lucide-react'

export default function ServiceSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Truck className="w-16 h-16 mx-auto text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">fast delivery</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
          </div>
          <div className="text-center">
            <RotateCcw className="w-16 h-16 mx-auto text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">10 days replacements</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
          </div>
          <div className="text-center">
            <Headphones className="w-16 h-16 mx-auto text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">24 x 7 support</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}