import TestimonialCard, { TestimonialProps } from './testimonial-card';

const testimonials: TestimonialProps[] = [
    {
        testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio vel arcu iaculis gravida a ut nulla. Nullam lobortis, arcu sed euismod pellentesque, justo velit sagittis lectus, in consectetur neque risus vel est.',
        stars: 5,
        user: 'John Doe',
        image: '/avatar-1.jpg',
    },
    {
        testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio vel arcu iaculis gravida a ut nulla. Nullam lobortis, arcu sed euismod pellentesque, justo velit sagittis lectus, in consectetur neque risus vel est.',
        stars: 5,
        user: 'John Doe',
        image: '/avatar-1.jpg',
    },
    {
        testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio vel arcu iaculis gravida a ut nulla. Nullam lobortis, arcu sed euismod pellentesque, justo velit sagittis lectus, in consectetur neque risus vel est.',
        stars: 5,
        user: 'John Doe',
        image: '/avatar-1.jpg',
    },
];

const TestimonialSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
                <TestimonialCard
                    key={testimonial.testimonial}
                    testimonial={''}
                    stars={0}
                    user={''}
                    image={''}
                />
            ))}
        </div>
    );
};

export default TestimonialSection;
