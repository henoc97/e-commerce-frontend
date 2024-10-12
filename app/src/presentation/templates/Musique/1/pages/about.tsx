import Image from 'next/image';
import Link from 'next/link';
import {
    ShoppingCart,
    Search,
    ChevronDown,
    Music,
    Users,
    Heart,
    Zap,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import Footer from '../components/index.component/footer/footer';


export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-[#5B4B8A]">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <Link
                            className="mr-6 flex items-center space-x-2"
                            href="/"
                        >
                            <Image
                                src="/placeholder.svg"
                                alt="Musicland Logo"
                                width={32}
                                height={32}
                            />
                            <span className="hidden font-bold sm:inline-block">
                                Musicland
                            </span>
                        </Link>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/shop"
                            >
                                Shop
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </Link>
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground"
                                href="/about"
                            >
                                About Us
                            </Link>
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/contact"
                            >
                                Contact
                            </Link>
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/blog"
                            >
                                Blog
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search products"
                                    className="pl-8"
                                    type="search"
                                />
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="relative"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#00B2A9] text-[10px] font-bold text-white flex items-center justify-center">
                                3
                            </span>
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-1 bg-white">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4B8A]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#E8CDAF]">
                                    Our Story
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                                    Discover the passion and dedication behind
                                    Musicland, your ultimate destination for all
                                    things music.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <Image
                                src="/placeholder.svg?text=Musicland+History"
                                alt="Musicland History"
                                width={600}
                                height={400}
                                className="mx-auto rounded-lg object-cover"
                            />
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Our Journey
                                </h2>
                                <p className="text-gray-500 md:text-xl">
                                    Founded in 1985, Musicland started as a
                                    small guitar shop in downtown Nashville. Our
                                    passion for music and commitment to quality
                                    quickly earned us a reputation among local
                                    musicians. Over the years, we've grown into
                                    a nationwide retailer, but our core values
                                    remain the same: to provide musicians of all
                                    levels with the best instruments and gear,
                                    backed by unparalleled expertise and
                                    service.
                                </p>
                                <p className="text-gray-500 md:text-xl">
                                    Today, Musicland is more than just a store -
                                    it's a community hub for music lovers, a
                                    resource for aspiring artists, and a partner
                                    to professionals in the industry. We're
                                    proud of our history and excited about the
                                    future of music that we continue to shape
                                    together with our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E8CDAF]">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Meet Our Team
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: 'Jane Doe',
                                    role: 'CEO',
                                    image: '/placeholder.svg?text=Jane+Doe',
                                },
                                {
                                    name: 'John Smith',
                                    role: 'Head of Sales',
                                    image: '/placeholder.svg?text=John+Smith',
                                },
                                {
                                    name: 'Emily Brown',
                                    role: 'Customer Service Manager',
                                    image: '/placeholder.svg?text=Emily+Brown',
                                },
                            ].map((member) => (
                                <Card
                                    key={member.name}
                                    className="overflow-hidden"
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-64"
                                    />
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold text-lg">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {member.role}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Our Core Values
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: Music,
                                    title: 'Passion for Music',
                                    description:
                                        'We live and breathe music, and it shows in everything we do.',
                                },
                                {
                                    icon: Users,
                                    title: 'Customer First',
                                    description:
                                        'Our customers are at the heart of every decision we make.',
                                },
                                {
                                    icon: Heart,
                                    title: 'Quality',
                                    description:
                                        'We offer only the best instruments and gear, thoroughly tested and approved.',
                                },
                                {
                                    icon: Zap,
                                    title: 'Innovation',
                                    description:
                                        "We're always looking for new ways to improve and innovate in the music industry.",
                                },
                            ].map((value) => (
                                <Card
                                    key={value.title}
                                    className="flex flex-col items-center text-center p-6"
                                >
                                    <value.icon className="h-12 w-12 mb-4 text-[#5B4B8A]" />
                                    <h3 className="font-semibold text-lg mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {value.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
