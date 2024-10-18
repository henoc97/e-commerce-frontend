import { Button } from "../../../../../../components/ui/button";

const PromoBanner: React.FC = () => {
    return (
        <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5B4B8A]">
                20% Off All Vinyl!
            </h2>
            <p className="mx-auto max-w-[600px] text-[#5B4B8A] md:text-xl">
                Expand your collection with our amazing vinyl selection. Limited
                time offer!
            </p>
            <Button className="bg-[#00B2A9] text-white">Shop Vinyl</Button>
        </div>
    );
};

export default PromoBanner;
