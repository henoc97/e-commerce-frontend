import { Layout } from "lucide-react";
import HeroSection from "../../components/about.component/sections/Hero-section";
import AddressCard from "../../components/contact.component/sections/address-card";
import ContactForm from "../../components/contact.component/sections/contact-form";
import MapFrame from "../../components/contact.component/sections/map-frame";


export default function Contact() {

    return (
        <Layout>
            <main className="flex-1 bg-white">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
                    <HeroSection />
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-500 md:text-xl">
                                    Fill out the form below and we'll get back
                                    to you as soon as possible.
                                </p>
                                <ContactForm />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter">
                                    Contact Information
                                </h2>
                                <AddressCard />
                                <MapFrame />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
