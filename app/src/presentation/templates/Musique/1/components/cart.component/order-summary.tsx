import { useEffect, useState } from 'react';
import { Button } from '../../../../../components/ui/button';
import { Card, CardContent } from '../../../../../components/ui/card';
import { Input } from '../../../../../components/ui/input';
import { CartItem } from './cart-products';
import { toast } from '../../../../../components/ui/use-toast';

interface OrderSummaryProps {
    cartItems: CartItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems }) => {
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const newTax = newSubtotal * 0.08; // Assuming 8% tax rate
        const newTotal = newSubtotal + newTax;

        setSubtotal(newSubtotal);
        setTax(newTax);
        setTotal(newTotal);
    }, [cartItems]); // Recalculer lorsque cartItems change

    const applyPromoCode = () => {
        toast({
            title: "Promo Code Applied",
            description: "Your discount has been applied to the order.",
        });
    };

    return (
        <div>
            <Card>
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <div className="flex space-x-2">
                            <Input placeholder="Enter promo code" />
                            <Button onClick={applyPromoCode}>Apply</Button>
                        </div>
                        <Button className="w-full bg-[#00B2A9] text-white">
                            Proceed to Checkout
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default OrderSummary;
