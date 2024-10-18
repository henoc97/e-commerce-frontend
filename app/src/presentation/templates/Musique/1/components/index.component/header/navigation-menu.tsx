import NavMenuItem, { MenuItemProps } from './navigation-menu-item';

const path = "src/presentation/templates/Musique/1/pages"
const menuItems: MenuItemProps[] = [
    { href: `${path}/`, label: 'Home' },
    { href: `/shop`, label: 'Shop' },
    { href: `/about`, label: 'About Us' },
    { href: `/contact`, label: 'Contact' },
    { href: `/blog`, label: 'Blog' },
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
