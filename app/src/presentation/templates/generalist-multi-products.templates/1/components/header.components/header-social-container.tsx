import SocialLink from './social-link';

const socialIcons = [
    'bxl-facebook',
    'bxl-twitter',
    'bxl-instagram',
    'bxl-linkedin',
];

const HeaderSocialContainer: React.FC = () => {
    return (
        <ul className="flex flex-row">
            {socialIcons.map((icon, index) => (
                <SocialLink key={index} icon={icon} />
            ))}
        </ul>
    );
};

export default HeaderSocialContainer;
