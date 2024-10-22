import { Poppins } from 'next/font/google';
import Header from '../components/header.components/header';
import DesktopNavMenu from '../components/desktop-navigation-menu.components/desktop-navigation-menu';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export default function Index() {
    return (
        <div
            className={`${poppins.className} min-h-screen w-full bg-charcoalgrayP1 bg-opacity-5`}
        >
            {/* <Modal /> */}
            <div className="mx-8">
                <Header />
                <DesktopNavMenu />
            </div>
        </div>
    );
}
