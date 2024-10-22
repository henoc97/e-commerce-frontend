import { Button } from "@/app/src/presentation/components/ui/button";
import { Card, CardContent } from "@/app/src/presentation/components/ui/card";
import { Input } from "@/app/src/presentation/components/ui/input";


export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">monthly newsletter</h3>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam veniam at itaque culpa hic corporis saepe dicta doloremque nihil.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="enter your email" className="flex-grow" />
              <Button type="submit">send</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}