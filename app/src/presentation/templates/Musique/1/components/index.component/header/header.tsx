import Logo from "./logo";
import NavMenu from "./navigation-menu";
import SearchInput from "./search-input";
import ShoppingCartButton from "./shopping-cart-button";

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Logo />
                    <NavMenu />
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <SearchInput />
                    </div>
                    <ShoppingCartButton />
                </div>
            </div>
        </header>
    );
};

export default Header;