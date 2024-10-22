"use client"
import BeautySalonLandingPage from './src/presentation/templates/fashion/1/pages/exemple/page';
import HomePage from './src/presentation/templates/furniture/1/pages/index/page';
import HomeG from './src/presentation/templates/generalist-multi-products.templates/1/pages/page';
import EcommerceLayout from './src/presentation/templates/generalist-multi-products.templates/2/pages/index/page';
import Component from './src/presentation/templates/kids-toys/1/pages/index/page';
import Index from './src/presentation/templates/Musique/1/pages/index/page';
import LandingPage from './src/presentation/templates/travel-accessories/1/pages/index/page';

export default function Home() {
    return (
        <div>
            <link
                href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
                rel="stylesheet"
            />
            <HomeG />
        </div>
    );
}
