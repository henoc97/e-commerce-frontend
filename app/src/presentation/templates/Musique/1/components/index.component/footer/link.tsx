import Link from 'next/link';

export interface FooterLinkProps {
    label: string;
    href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({label, href}) => {
    return (
        <Link href={href} className="hover:text-[#00B2A9]">
            {label}
        </Link>
    );
};

export default FooterLink;
