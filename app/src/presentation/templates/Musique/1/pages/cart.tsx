import { useState } from 'react';
import Footer from '../components/index.component/footer/footer';
import Header from '../components/index.component/header/header';
import OrderSummary from '../components/cart.component/order-summary';
import CartProducts, { CartItem } from '../components/cart.component/cart-products';



let _cartItems = [
  {
      id: 1,
      name: 'Electric Guitar',
      price: 599.99,
      quantity: 1,
      image: '/placeholder.svg?text=Electric+Guitar',
  },
  {
      id: 2,
      name: 'Acoustic Drum Set',
      price: 799.99,
      quantity: 1,
      image: '/placeholder.svg?text=Drum+Set',
  },
  {
      id: 3,
      name: 'Digital Piano',
      price: 1299.99,
      quantity: 1,
      image: '/placeholder.svg?text=Digital+Piano',
  },
]

export default function Cart() {
  // Lever l'état du panier au composant parent
  const [cartItems, setCartItems] = useState<CartItem[]>(_cartItems);

  return (
    <div className="flex flex-col min-h-screen bg-[#5B4B8A]">
      <Header />
      <main className="flex-1 bg-white">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Your Cart</h1>
            <div className="grid gap-10 md:grid-cols-3">
              {/* Passer les props pour partager l'état avec les composants enfants */}
              <CartProducts cartItems={cartItems} setCartItems={setCartItems} />
              <OrderSummary cartItems={cartItems} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
