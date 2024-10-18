import { Card, CardContent } from '../../../../../components/ui/card';
import { Label } from '../../../../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../../../../components/ui/radio-group';

interface ShippingMethodProps {
    setShippingMethod: (method: string) => void;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({setShippingMethod}) => {
    return (
        <Card className="mt-6">
            <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Shipping Method</h2>
                <RadioGroup
                    defaultValue="standard"
                    onValueChange={setShippingMethod}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">
                            Standard Shipping ($10)
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express">Express Shipping ($25)</Label>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    );
};

export default ShippingMethod;
