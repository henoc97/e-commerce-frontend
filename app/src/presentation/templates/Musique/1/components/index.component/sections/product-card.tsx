import Link from 'next/link';
import Image from 'next/image';

export interface ProductProps {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, description, images}) => {
    return (
        <div key={id} className="overflow-hidden">
            <Image
                src={`${images[0]}?text=Product+${name}`}
                alt={`Product ${description}`}
                width={300}
                height={200}
                className="object-cover w-full"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{name}e</h3>
                <p className="text-[#5B4B8A] font-bold mb-2">${price}</p>
                <Button className="w-full bg-[#00B2A9] text-white">
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
