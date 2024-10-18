import { Card, CardContent } from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";

const ShippingInfo: React.FC = () => {
    return (
        <Card>
            <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                    Shipping Information
                </h2>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" required />
                        </div>
                        <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" required />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" required />
                        </div>
                        <div>
                            <Label htmlFor="zipCode">Zip Code</Label>
                            <Input id="zipCode" required />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" required />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ShippingInfo;
