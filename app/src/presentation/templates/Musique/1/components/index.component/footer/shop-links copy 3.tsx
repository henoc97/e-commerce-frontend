import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import FooterLink, { FooterLinkProps } from './link';

const links: FooterLinkProps[] = [
    { href: 'https://facebook.com', label: 'Facebook' },
    { href: 'https://twitter.com', label: 'Twitter' },
    { href: 'https://instagram.com', label: 'Instagram' },
    { href: 'https://youtube.com', label: 'YouTube' },
];

const ConnectLink: React.FC = () => {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2 text-[#E8CDAF]">Connect</h3>
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

export default ConnectLink;
