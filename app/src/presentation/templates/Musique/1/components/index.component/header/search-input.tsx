import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

const SearchInput: React.FC = () => {
    return (
        <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search products"
                className="pl-8"
                type="search"
            />
        </div>
    );
};

export default SearchInput;