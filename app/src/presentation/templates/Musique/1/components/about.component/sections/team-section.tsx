import Image from 'next/image';
import { Card, CardContent } from '../../../../../../components/ui/card';

const TeamSection: React.FC = () => {

    const team = [
        {
            name: 'Jane Doe',
            role: 'CEO',
            image: '/placeholder.svg?text=Jane+Doe',
        },
        {
            name: 'John Smith',
            role: 'Head of Sales',
            image: '/placeholder.svg?text=John+Smith',
        },
        {
            name: 'Emily Brown',
            role: 'Customer Service Manager',
            image: '/placeholder.svg?text=Emily+Brown',
        },
    ];

    return (
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Meet Our Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member) => (
                    <Card key={member.name} className="overflow-hidden">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="object-cover w-full h-64"
                        />
                        <CardContent className="p-4">
                            <h3 className="font-semibold text-lg">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {member.role}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
