import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '../../../../../components/ui/card';
import { Button } from '../../../../../components/ui/button';
import { toast } from '../../../../../components/ui/use-toast';

interface CartProductsProps {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const CartProducts: React.FC<CartProductsProps> = ({ cartItems, setCartItems }) => {

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
        toast({
            title: "Item Removed",
            description: "The item has been removed from your cart.",
        });
    };

    return (
        <div className="md:col-span-2">
            {cartItems.map((item) => (
                <Card key={item.id} className="mb-6">
                    <CardContent className="p-6 flex items-center">
                        <Image
                            src='/assets/images/guitar.jpg'
                            alt={item.name}
                            width={100}
                            height={100}
                            className="object-cover mr-6"
                        />
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold">
                                {item.name}
                            </h3>
                            <p className="text-[#5B4B8A] font-bold">
                                ${item.price.toFixed(2)}
                            </p>
                            <div className="flex items-center mt-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="mx-2">{item.quantity}</span>

                                <Button
                                    
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="ml-4"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default CartProducts;
