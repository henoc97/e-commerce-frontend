interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    icon?: string;
    required: boolean;
}

const Input: React.FC<InputProps> = ({
    type,
    name,
    placeholder,
    icon,
    required,
}) => {
    return (
        <div className="relative w-full mb-4">
            {icon !== undefined && (
                <button
                    type="submit"
                    className="bg-charcoalgrayP1 absolute m-1 rounded-md hover:bg-brightorangeP1 transition-colors duration-300"
                >
                    <i className={`bx bx-${icon} text-white m-2`}></i>
                </button>
            )}
            <input
                type={type}
                name={name}
                className="p-2 pl-10 bg-charcoalgrayP1 bg-opacity-5 border border-black rounded-md w-full focus:border-none"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default Input;
