import React from 'react';

interface CloseIconProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => {
    return (
        <button
            className="absolute top-3 right-3 text-gray-400 hover:text-brightorangeP1"
            onClick={onClick}
        >
            <i className="bx bx-x text-2xl"></i>
        </button>
    );
};

export default CloseIcon;
