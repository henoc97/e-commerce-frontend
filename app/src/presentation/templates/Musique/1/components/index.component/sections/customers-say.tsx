import TestimonialCard, {TestimonialProps} from './testimonial-card';

const testimonials: TestimonialProps[] = [
    {
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio vel arcu iaculis gravida a ut nulla. Nullam lobortis, arcu sed euismod pellentesque, justo velit sagittis lectus, in consectetur neque risus vel est.',
        stars: 5,
        user: 'John Doe',
        image: '/avatar-1.jpg',
    },
    {
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio vel arcu iaculis gravida a ut nulla. Nullam lobortis, arcu sed euismod pellentesque, justo velit sagittis lectus, in consectetur neque risus vel est.',
        stars: 5,
        user: 'John Doe',
        image: '/avatar-1.jpg',
    },
    {
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio vel arcu iaculis gravida a ut nulla. Nullam lobortis, arcu sed euismod pellentesque, justo velit sagittis lectus, in consectetur neque risus vel est.',
        stars: 5,
        user: 'John Doe',
        image: '/avatar-1.jpg',
    },
]

const TestimonialSection: React.FC = () => {
    return (
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard 
                        testimonial={testimonial.testimonial}
                        stars={testimonial.stars}
                        user={testimonial.user}
                        image={testimonial.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
