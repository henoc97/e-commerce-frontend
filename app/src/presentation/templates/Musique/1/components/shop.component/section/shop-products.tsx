import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../index.component/sections/product-card';

const ShopProducts: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, i) => (
                <ProductCard id={0}
                    name={''}
                    price={0}
                    description={''}
                    images={[]}
                />
            ))}
        </div>
    );
};

export default ShopProducts;