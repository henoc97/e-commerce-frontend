import Link from 'next/link';
import Image from 'next/image';
import ProductCard, { ProductProps } from './product-card';

const products: ProductProps[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        images: [
            '/guitar.jpg',
            '/guitar.jpg',
            '/guitar.jpg',
        ],
    },
    {
        id: 2,
        name: 'Product 2',
        price: 19.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        images: [
            '/guitar.jpg',
            '/guitar.jpg',
            '/guitar.jpg',
        ],
    },
    {
        id: 3,
        name: 'Product 3',
        price: 29.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        images: [
            '/guitar.jpg',
            '/guitar.jpg',
            '/guitar.jpg',
        ],
    },
]
// ... code existant ...

const FeaturedProductsSection: React.FC = () => {
    return (
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} id={product.id}
                        name= {product.name}
                        price={product.price}
                        description={product.description}
                        images={product.images}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProductsSection;
