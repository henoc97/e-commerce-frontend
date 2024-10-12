"use client"
import { Poppins } from 'next/font/google';
import Index from './src/presentation/templates/Musique/1/pages';
import About from './src/presentation/templates/Musique/1/pages/about';
import Shop from './src/presentation/templates/Musique/1/pages/shop';
import Cart from './src/presentation/templates/Musique/1/pages/cart';

export default function Home() {
    return (
        <div>
            <link
                href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
                rel="stylesheet"
            />
            <Cart />
        </div>
    );
}
