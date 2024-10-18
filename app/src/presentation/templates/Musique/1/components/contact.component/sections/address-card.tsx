import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../../../../../../components/ui/card";

const AddressCard: React.FC = () => {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-[#00B2A9]" />
                        <span>support@musicland.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-[#00B2A9]" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-[#00B2A9]" />
                        <span>123 Music Street, Nashville, TN 37203</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AddressCard;
