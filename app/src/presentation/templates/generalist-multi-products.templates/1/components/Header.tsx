'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Search, ShoppingBag, User } from 'lucide-react'
import { Button } from '@/app/src/presentation/components/ui/button'
import { Input } from '@/app/src/presentation/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/app/src/presentation/components/ui/sheet'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 border-b">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-gray-800">Anon</Link>
            <div className="hidden md:flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800">Home</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">Categories</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">Products</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">About</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input type="search" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-6 w-6" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col space-y-4">
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Home</Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Categories</Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Products</Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">About</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}