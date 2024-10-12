import Image from 'next/image';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';

export interface ProductProps {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, description, images}) => {
    return (
        <Card key={id} className="overflow-hidden">
            <Image
                src={`${images[0]}?text=Product+${name}`}
                alt={`Product ${description}`}
                width={300}
                height={200}
                className="object-cover w-full"
            />
            <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{name}e</h3>
                <p className="text-[#5B4B8A] font-bold mb-2">${price}</p>
                <Button className="w-full bg-[#00B2A9] text-white">
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
