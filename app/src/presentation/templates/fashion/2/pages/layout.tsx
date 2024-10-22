import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nike Store',
  description: 'Your one-stop shop for Nike shoes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">nike</a>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-700 hover:text-orange-500">home</a>
          <a href="#products" className="text-gray-700 hover:text-orange-500">products</a>
          <a href="#featured" className="text-gray-700 hover:text-orange-500">featured</a>
          <a href="#review" className="text-gray-700 hover:text-orange-500">review</a>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl text-gray-700 hover:text-orange-500"><i className="fas fa-heart"></i></a>
          <a href="#" className="text-2xl text-gray-700 hover:text-orange-500"><i className="fas fa-shopping-cart"></i></a>
          <a href="#" className="text-2xl text-gray-700 hover:text-orange-500"><i className="fas fa-user"></i></a>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">our stores</h3>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">Senegal</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">USA</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">japan</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">paris</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">quick links</h3>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">home</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">products</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">featured</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">review</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">extra links</h3>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">my account</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">my favorite</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">my orders</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">newsletter</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">follow us</h3>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">facebook</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">twitter</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">instagram</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500 mb-2">linkedin</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          created by <span className="text-orange-500">Coding Team</span> | all rights reserved
        </div>
      </div>
    </footer>
  )
}