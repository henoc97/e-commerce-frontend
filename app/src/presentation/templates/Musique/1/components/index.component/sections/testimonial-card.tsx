import Image from 'next/image';
import { Star } from '../../ui/star';
import { Card } from '../../ui/card';

export interface TestimonialProps {
    testimonial: string;
    stars: number;
    user: string;
    image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({testimonial, stars, user, image}) => {
    return (
        <Card key={testimonial} className="p-6">
            <div className="flex items-center space-x-4 mb-4">
                <Image
                    src={`${image}?text=User+${testimonial}`}
                    alt={`User ${testimonial}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <div className="flex">
                        {[...Array(stars)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 fill-[#E8CDAF] text-[#E8CDAF]"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-muted-foreground">
                "Musicland has an incredible selection and top-notch customer
                service. I couldn't be happier with my purchase!"
            </p>
        </Card>
    );
};

export default TestimonialCard;
