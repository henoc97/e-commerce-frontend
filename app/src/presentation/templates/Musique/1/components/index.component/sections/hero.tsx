import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../ui/button';

const HeroSection: React.FC = () => {
    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#E8CDAF]">
                        Discover Your Sound
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                        Explore our vast collection of instruments, gear, and
                        accessories to find your perfect musical match.
                    </p>
                </div>
                <Button className="bg-[#00B2A9] text-white">Shop Now</Button>
            </div>
        </div>
    );
};

export default HeroSection;
