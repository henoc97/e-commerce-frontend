import Link from 'next/link';

export interface MenuItemProps {
    label: string;
    href: string;
}

const path = "src/presentation/templates/Musique/1/pages"

const NavMenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
    return (
        <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href={`${path}${href}`}
        >
            {label}
        </Link>
    )
};


export default NavMenuItem;