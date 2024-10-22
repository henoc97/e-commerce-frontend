interface SocialNetIconProps {
    icon: string;
}

const SocialLink: React.FC<SocialNetIconProps> = ({ icon }) => {
    return (
        <li className="mr-1">
            <a href="#">
                <i
                    className={`bx ${icon} text-charcoalgrayP1 text-xl p-2 rounded-lg shadow-2xl bg-white transition-colors duration-300 hover:text-brightorangeP1`}
                ></i>
            </a>
        </li>
    );
};

export default SocialLink;
