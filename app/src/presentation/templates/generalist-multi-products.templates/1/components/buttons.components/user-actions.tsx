'use client';

import React from 'react';
interface ActionIconProps {
    icon: string;
    count: number | null;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ActionBtn: React.FC<ActionIconProps> = ({ icon, count, onClick }) => {
    return (
        <button className="relative group" onClick={onClick}>
            <i
                className={`bx bx-${icon} text-charcoalgrayP1 text-3xl p-2 ml-2 rounded-lg shadow-2xl bg-white transition-colors duration-300 group-hover:text-brightorangeP1`}
            ></i>
            {count !== null && (
                <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-2 text-white text-sm px-2 bg-salmonP1 rounded-full transition-colors duration-300 group-hover:bg-charcoalgrayP1">
                    {count}
                </span>
            )}
        </button>
    );
};

export default ActionBtn;
