'use client';

import { useState, useRef, useEffect } from 'react';

interface SelectDropdownProps<T> {
    options: T[];
    selectedOption: T;
    setSelectedOption(option: T): void;
    renderOptionLabel: (option: T) => string;
}

const SelectDropdown = <T,>({
    options,
    selectedOption,
    setSelectedOption,
    renderOptionLabel,
}: SelectDropdownProps<T>) => {
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

    const handleSelect = (option: T) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className="relative inline-block w-auto">
            <div
                className="bg-charcoalgrayP1-200 text-charcoalgrayP1 border border-gray-300 rounded-md cursor-pointer p-2 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{renderOptionLabel(selectedOption)}</span>
                <i
                    className={`bx bx-chevron-${isOpen ? 'up' : 'down'} text-xl ml-2`}
                ></i>
            </div>
            {isOpen && (
                <ul className="absolute z-10 rounded-md shadow-2xl bg-white w-auto border border-gray-300 mt-1">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`text-charcoalgrayP1 hover:bg-charcoalgrayP1 hover:text-white cursor-pointer p-2 ${option === selectedOption ? 'bg-brightorangeP1 text-white' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {renderOptionLabel(option)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectDropdown;
