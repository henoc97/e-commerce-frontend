import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const ShoppingCartButton: React.FC = () => {
    return (
        <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#00B2A9] text-[10px] font-bold text-white flex items-center justify-center">
                3
            </span>
        </Button>
    );
};

export default ShoppingCartButton;
