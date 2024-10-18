import { useState } from 'react';
import { Button } from '../../../../../components/ui/button';
import { Card, CardContent } from '../../../../../components/ui/card';
import { Input } from '../../../../../components/ui/input';
import { Label } from '../../../../../components/ui/label';
import { toast } from '../../../../../components/ui/use-toast';

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const orderSummary: React.FC<{ shippingMethod: string }> = ({
    shippingMethod,
}) => {
    const [orderItems] = useState<OrderItem[]>([
        { id: 1, name: 'Electric Guitar', price: 599.99, quantity: 1 },
        { id: 2, name: 'Acoustic Drum Set', price: 799.99, quantity: 1 },
        { id: 3, name: 'Digital Piano', price: 1299.99, quantity: 1 },
    ]);

    const subtotal = orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shippingCost = shippingMethod === 'express' ? 25 : 10;
    const tax = subtotal * 0.08; // Assuming 8% tax rate
    const total = subtotal + shippingCost + tax;

    return (
        <Card>
            <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                    {orderItems.map((item) => (
                        <div key={item.id} className="flex justify-between">
                            <span>
                                {item.name} (x
                                {item.quantity})
                            </span>
                            <span>
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                        </div>
                    ))}
                    <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>${shippingCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-2">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="w-full mt-6 bg-[#00B2A9] text-white"
                >
                    Place Order
                </Button>
            </CardContent>
        </Card>
    );
};

export default orderSummary;
