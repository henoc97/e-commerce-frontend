import React from 'react';

interface LabelProps {
    label: string;
}

const SubmitButton: React.FC<LabelProps> = ({ label }) => {
    return (
        <button
            type="submit"
            className="bg-salmonP1 text-white py-2 px-4 rounded-md w-full hover:bg-brightorangeP1 transition-colors duration-300"
        >
            {label}
        </button>
    );
};

export default SubmitButton;
