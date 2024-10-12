import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../ui/select';

const FilterSelector: React.FC = () => {
    return (
        <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default FilterSelector;
