import { useState } from 'react';
import OrderSummary from '../../components/cart.component/order-summary';
import CartProducts, { CartItem } from '../../components/cart.component/cart-products';
import Layout from '../../components/layout';



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
    <Layout>
      <main className="flex-1 bg-white">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Your Cart</h1>
            <div className="grid gap-10 md:grid-cols-3">
              <CartProducts cartItems={cartItems} setCartItems={setCartItems} />
              <OrderSummary cartItems={cartItems} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
