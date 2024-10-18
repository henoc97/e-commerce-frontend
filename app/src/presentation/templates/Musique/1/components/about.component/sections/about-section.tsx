import Image from 'next/image';

const AboutSection: React.FC = () => {
    return (
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <Image
                    src="/placeholder.svg?text=Musicland+History"
                    alt="Musicland History"
                    width={600}
                    height={400}
                    className="mx-auto rounded-lg object-cover"
                />
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Our Journey
                    </h2>
                    <p className="text-gray-500 md:text-xl">
                        Founded in 1985, Musicland started as a small guitar
                        shop in downtown Nashville. Our passion for music and
                        commitment to quality quickly earned us a reputation
                        among local musicians. Over the years, we've grown into
                        a nationwide retailer, but our core values remain the
                        same: to provide musicians of all levels with the best
                        instruments and gear, backed by unparalleled expertise
                        and service.
                    </p>
                    <p className="text-gray-500 md:text-xl">
                        Today, Musicland is more than just a store - it's a
                        community hub for music lovers, a resource for aspiring
                        artists, and a partner to professionals in the industry.
                        We're proud of our history and excited about the future
                        of music that we continue to shape together with our
                        customers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
