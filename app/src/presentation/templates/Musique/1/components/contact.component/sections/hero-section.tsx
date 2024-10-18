import React, { useEffect } from 'react';

const HeroSection: React.FC = () => {
    useEffect(() => {
        // Logique pour le contenu dynamique ou les effets secondaires
        console.log('HeroSection monté');
    }, []);

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#E8CDAF]">
                        Our Story
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                        Discover the passion and dedication behind Musicland,
                        your ultimate destination for all things music.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;