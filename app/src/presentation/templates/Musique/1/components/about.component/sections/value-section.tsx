import { Heart, Music, Users, Zap } from 'lucide-react';
import { Card } from '../../../../../../components/ui/card';

const ValuesSection: React.FC = () => {
    const values = [
        {
            icon: Music,
            title: 'Passion for Music',
            description:
                'We live and breathe music, and it shows in everything we do.',
        },
        {
            icon: Users,
            title: 'Customer First',
            description:
                'Our customers are at the heart of every decision we make.',
        },
        {
            icon: Heart,
            title: 'Quality',
            description:
                'We offer only the best instruments and gear, thoroughly tested and approved.',
        },
        {
            icon: Zap,
            title: 'Innovation',
            description:
                "We're always looking for new ways to improve and innovate in the music industry.",
        },
    ];

    return (
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Our Core Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value) => (
                    <Card
                        key={value.title}
                        className="flex flex-col items-center text-center p-6"
                    >
                        <value.icon className="h-12 w-12 mb-4 text-[#5B4B8A]" />
                        <h3 className="font-semibold text-lg mb-2">
                            {value.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {value.description}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ValuesSection;
