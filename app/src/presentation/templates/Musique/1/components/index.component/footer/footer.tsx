import Link from 'next/link';
import AboutLink from './about-links';
import ConnectLink from './connect-links';
import SupportLink from './support-links';
import { FooterLinkProps } from './link';
import ShopLink from './shop-links';

const links: FooterLinkProps[] = [
    { href: '/shop/guitars', label: 'Guitars' },
    { href: '/shop/drums', label: 'Drums' },
    { href: '/shop/keyboards', label: 'Keyboards' },
    { href: '/shop/accessories', label: 'Accessories' },
];

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-6 bg-[#5B4B8A] text-white">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <ShopLink />
                    <AboutLink />
                    <SupportLink />
                    <ConnectLink />
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © 2024 Musicland. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link
                            href="/privacy"
                            className="text-sm text-gray-400 hover:text-[#00B2A9]"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-gray-400 hover:text-[#00B2A9]"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
