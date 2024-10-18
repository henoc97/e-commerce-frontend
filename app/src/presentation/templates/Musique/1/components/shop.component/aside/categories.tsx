import { Checkbox } from '../../../../../../components/ui/checkbox';

const Categories: React.FC = () => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Categories</h2>
            <div className="space-y-2">
                {['Guitars', 'Drums', 'Keyboards', 'Accessories'].map(
                    (category) => (
                        <div key={category} className="flex items-center">
                            <Checkbox id={category} />
                            <label
                                htmlFor={category}
                                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {category}
                            </label>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Categories;
