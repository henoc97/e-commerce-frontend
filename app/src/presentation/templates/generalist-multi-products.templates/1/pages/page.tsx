import Banner from '../components/Banner';
import Blog from '../components/Blog';
import Category from '../components/Category';
import ProductShowcase from '../components/ProductShowcase';
import TestimonialsCTAService from '../components/TestimonialsCTAService';
import { ThemeToggle } from './theme';

export default function HomeG() {
    return (
        <>
            <ThemeToggle />
            <Banner />
            <Category />
            <ProductShowcase />
            <TestimonialsCTAService />
            <Blog />
        </>
    );
}
