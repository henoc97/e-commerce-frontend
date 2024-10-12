import { Button } from "../../ui/button";

const SwitchProductsPages: React.FC = () => {
    return (
        <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
                Previous
            </Button>
            {[1, 2, 3, 4].map((page) => (
                <Button
                    key={page}
                    variant={page === 1 ? 'default' : 'outline'}
                    className="mx-1"
                >
                    {page}
                </Button>
            ))}
            <Button variant="outline" className="mx-1">
                Next
            </Button>
        </div>
    );
};

export default SwitchProductsPages;
