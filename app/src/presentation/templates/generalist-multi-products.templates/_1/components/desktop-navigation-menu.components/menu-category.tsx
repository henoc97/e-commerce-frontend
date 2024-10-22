'use client';

import { useState, useRef, useEffect } from 'react';
import DropdownPanel, { DropdownPanelProps } from './dropdown-panel';

export interface MenuCategoryProps {
    href: string;
    label: string;
    dropdownPanels?: DropdownPanelProps[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({
    href,
    label,
    dropdownPanels,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (option: any) => {
        // setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <li className="relative flex-grow">
            <div
                onMouseLeave={() => setIsOpen(false)}
                onMouseEnter={() => setIsOpen(true)}
                className="relative"
            >
                <a
                    href={href}
                    className={`relative
                        inline-block font-semibold
                        transition-all duration-300 
                        hover:text-brightorangeP1
                        after:content-[''] 
                        after:absolute after:left-0 after:bottom-[-8px] 
                        after:w-full after:h-1 after:bg-brightorangeP1 
                        after:scale-x-0 after:origin-left 
                        after:transition-transform after:duration-300 
                        after:ease-out hover:after:scale-x-100`}
                >
                    {label}
                </a>
                {/* Dropdown logic */}
                {isOpen &&
                    dropdownPanels !== undefined &&
                    dropdownPanels.map((panel, index) => (
                        <DropdownPanel
                            key={index}
                            panelList={panel.panelList}
                        />
                    ))}
            </div>
        </li>
    );
};

export default MenuCategory;
