import { useState } from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Textarea } from "../../../../../components/ui/textarea";
import { toast } from "../../../../../components/ui/use-toast";
import OrderSummary from "../../components/order.component/order-summary";
import ShippingMethod from "../../components/order.component/shipping-method";
import ShippingInfo from "../../components/order.component/shipping-info";
import Layout from "../../components/layout";


interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function Order() {

    const [shippingMethod, setShippingMethod] = useState('standard');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you would typically send the order data to your backend
        console.log('Order submitted');
        toast({
            title: 'Order Placed',
            description:
                'Your order has been successfully placed. Thank you for shopping with us!',
        });
    };

    return (
        <Layout>
            <main className="flex-1 bg-white">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                            Complete Your Order
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-10 md:grid-cols-2"
                        >
                            <div>
                                <ShippingInfo />
                                <ShippingMethod
                                    setShippingMethod={setShippingMethod}
                                />
                                <Card className="mt-6">
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            Additional Information
                                        </h2>
                                        <Textarea placeholder="Add any special instructions or notes for your order" />
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <OrderSummary shippingMethod={shippingMethod} />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
