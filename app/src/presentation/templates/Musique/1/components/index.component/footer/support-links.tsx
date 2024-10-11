import FooterLink, { FooterLinkProps } from './link';

const links: FooterLinkProps[] = [
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQs' },
    { href: '/shipping', label: 'Shipping' },
    { href: '/returns', label: 'Returns' },
];

const SupportLink: React.FC = () => {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2 text-[#E8CDAF]">Support</h3>
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

export default SupportLink;
