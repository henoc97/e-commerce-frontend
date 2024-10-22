import MenuCategory, { MenuCategoryProps } from './menu-category';
import menuCategory from './utils/menu-category-list';

const menuCategories: MenuCategoryProps[] = menuCategory;

export default function DesktopNavMenu() {
    return (
        <nav className="mx-20">
            <ul className="flex text-charcoalgrayP1">
                {menuCategories.map((menu) => (
                    <MenuCategory
                        href={menu.href}
                        label={menu.label}
                        dropdownPanels={menu.dropdownPanels}
                    />
                ))}
            </ul>
        </nav>
    );
}
