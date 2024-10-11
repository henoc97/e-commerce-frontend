import Link from 'next/link';
import { MenuItemProps } from './navigation-menu-item';

const menuItems: MenuItemProps[] = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Shop' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Blog' },
]

const NavMenu: React.FC = () => {
    return (
        <nav className="flex items-center space-x-6 text-sm font-medium">
            {menuItems.map((menuItem) => (
                <Link href={menuItem.href} key={menuItem.label}>
                    {menuItem.label}
                </Link>
            ))}
        </nav>
    );
};


export default NavMenu;