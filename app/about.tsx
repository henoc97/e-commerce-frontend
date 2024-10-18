
import { Layout } from 'lucide-react';
import HeroSection from './src/presentation/templates/Musique/1/components/about.component/sections/Hero-section';
import AboutSection from './src/presentation/templates/Musique/1/components/about.component/sections/about-section';
import TeamSection from './src/presentation/templates/Musique/1/components/about.component/sections/team-section';
import ValuesSection from './src/presentation/templates/Musique/1/components/about.component/sections/value-section';


export default function About() {
    return (
        <Layout>
           <main className="flex-1 bg-white">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
                    <HeroSection />
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <AboutSection />
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E8CDAF]">
                    <TeamSection />
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <ValuesSection />
                </section>
            </main>
        </Layout>
    );
}
