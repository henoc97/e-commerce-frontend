import Link from 'next/link';
import NavMenuItem, { MenuItemProps } from './navigation-menu-item';

const menuItems: MenuItemProps[] = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Shop' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Blog' },
];

const NavMenu: React.FC = () => {
    return (
        <nav className="flex items-center space-x-6 text-sm font-medium">
            {menuItems.map((menuItem) => (
                <NavMenuItem
                    label={menuItem.label}
                    href={menuItem.href}
                    key={menuItem.label}
                />
            ))}
        </nav>
    );
};

export default NavMenu;
