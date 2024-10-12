import Link from "next/link";
import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image
                src="/assets/images/logo/music-logo.jpg"
                alt="Musicland Logo"
                width={32}
                height={32}
            />
            <span className="hidden font-bold sm:inline-block">Musicland</span>
        </Link>
    );
};

export default Logo;