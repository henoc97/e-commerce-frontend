import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import FooterLink, { FooterLinkProps } from './link';

const links: FooterLinkProps[] = [
    { href: '/shop/guitars', label: 'Guitars' },
    { href: '/shop/drums', label: 'Drums' },
    { href: '/shop/keyboards', label: 'Keyboards' },
    { href: '/shop/accessories', label: 'Accessories' },
];

const ShopLink: React.FC = () => {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2 text-[#E8CDAF]">Shop</h3>
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

export default ShopLink;
