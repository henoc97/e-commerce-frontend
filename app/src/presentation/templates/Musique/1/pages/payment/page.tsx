import { useState } from "react";
import Layout from "../../components/layout";
import { CreditCard } from "lucide-react";
import { FaPaypal } from "react-icons/fa";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Label } from "../../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../../components/ui/radio-group";
import { toast } from "../../../../../components/ui/use-toast";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";


export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you would typically process the payment through a payment gateway
        console.log('Payment processed');
        toast({
            title: 'Payment Successful',
            description:
                'Your payment has been processed successfully. Thank you for your purchase!',
        });
    };

    return (
        <Layout>
            <main className="flex-1 bg-white">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                            Payment
                        </h1>
                        <div className="grid gap-10 md:grid-cols-2">
                            <div>
                                <Card>
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            Payment Method
                                        </h2>
                                        <RadioGroup
                                            defaultValue="credit-card"
                                            onValueChange={setPaymentMethod}
                                        >
                                            <div className="flex items-center space-x-2 mb-4">
                                                <RadioGroupItem
                                                    value="credit-card"
                                                    id="credit-card"
                                                />
                                                <Label
                                                    htmlFor="credit-card"
                                                    className="flex items-center"
                                                >
                                                    <CreditCard className="mr-2" />{' '}
                                                    Credit Card
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="paypal"
                                                    id="paypal"
                                                />
                                                <Label
                                                    htmlFor="paypal"
                                                    className="flex items-center"
                                                >
                                                    <FaPaypal className="mr-2" />{' '}
                                                    PayPal
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </CardContent>
                                </Card>
                                {paymentMethod === 'credit-card' && (
                                    <Card className="mt-6">
                                        <CardContent className="p-6">
                                            <h2 className="text-2xl font-semibold mb-4">
                                                Credit Card Information
                                            </h2>
                                            <form
                                                onSubmit={handleSubmit}
                                                className="space-y-4"
                                            >
                                                <div>
                                                    <Label htmlFor="cardNumber">
                                                        Card Number
                                                    </Label>
                                                    <Input
                                                        id="cardNumber"
                                                        placeholder="1234 5678 9012 3456"
                                                        required
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <Label htmlFor="expiryDate">
                                                            Expiry Date
                                                        </Label>
                                                        <Input
                                                            id="expiryDate"
                                                            placeholder="MM/YY"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="cvv">
                                                            CVV
                                                        </Label>
                                                        <Input
                                                            id="cvv"
                                                            placeholder="123"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Label htmlFor="nameOnCard">
                                                        Name on Card
                                                    </Label>
                                                    <Input
                                                        id="nameOnCard"
                                                        placeholder="John Doe"
                                                        required
                                                    />
                                                </div>
                                                <Button
                                                    type="submit"
                                                    className="w-full bg-[#00B2A9] text-white"
                                                >
                                                    Pay Now
                                                </Button>
                                            </form>
                                        </CardContent>
                                    </Card>
                                )}
                                {paymentMethod === 'paypal' && (
                                    <Card className="mt-6">
                                        <CardContent className="p-6">
                                            <h2 className="text-2xl font-semibold mb-4">
                                                PayPal
                                            </h2>
                                            <p className="mb-4">
                                                You will be redirected to PayPal
                                                to complete your payment.
                                            </p>
                                            <Button
                                                onClick={handleSubmit}
                                                className="w-full bg-[#00B2A9] text-white"
                                            >
                                                Proceed to PayPal
                                            </Button>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                            <div>
                                <Card>
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            Order Summary
                                        </h2>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span>Electric Guitar</span>
                                                <span>$599.99</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Acoustic Drum Set</span>
                                                <span>$799.99</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Digital Piano</span>
                                                <span>$1,299.99</span>
                                            </div>
                                            <div className="border-t pt-2 mt-2">
                                                <div className="flex justify-between">
                                                    <span>Subtotal</span>
                                                    <span>$2,699.97</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Shipping</span>
                                                    <span>$25.00</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Tax</span>
                                                    <span>$215.99</span>
                                                </div>
                                                <div className="flex justify-between font-bold text-lg mt-2">
                                                    <span>Total</span>
                                                    <span>$2,940.96</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
