import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import FooterLink, { FooterLinkProps } from './link';

const links: FooterLinkProps[] = [
    { href: '/about', label: 'Our story' },
    { href: '/careers', label: 'Careers' },
    { href: '/press', label: 'Press' },
];

const AboutLink: React.FC = () => {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2 text-[#E8CDAF]">About</h3>
            <ul className="space-y-1">
                {links.map((link, index) => (
                    <li key={index}>
                        <FooterLink 
                            label={link.label} 
                            href={link.href} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AboutLink;
