"use client"

import React from 'react';
import Header from './index.component/header/header';
import Footer from './index.component/footer/footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#5B4B8A]">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
