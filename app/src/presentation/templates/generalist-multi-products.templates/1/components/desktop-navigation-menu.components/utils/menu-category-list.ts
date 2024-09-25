import { MenuCategoryProps } from '../menu-category';

const menuCategory: MenuCategoryProps[] = [
    {
        href: '#',
        label: 'Home',
    },
    {
        href: '#',
        label: 'Categories',
        dropdownPanels: [
            {
                panelList: [
                    {
                        href: '#',
                        label: 'Electronics',
                        panelListItem: [
                            { href: '#', label: 'Desktop' },
                            { href: '#', label: 'Laptop' },
                            { href: '#', label: 'Camera' },
                            { href: '#', label: 'Tablet' },
                            { href: '#', label: 'Headphone' },
                            {
                                href: '#',
                                imgSrc: './assets/images/electronics-banner-1.jpg',
                            },
                        ],
                    },
                    {
                        href: '#',
                        label: "Men's",
                        panelListItem: [
                            { href: '#', label: 'Formal' },
                            { href: '#', label: 'Casual' },
                            { href: '#', label: 'Sports' },
                            { href: '#', label: 'Jacket' },
                            { href: '#', label: 'Sunglasses' },
                            {
                                href: '#',
                                imgSrc: './assets/images/mens-banner.jpg',
                            },
                        ],
                    },
                    {
                        href: '#',
                        label: "Women's",
                        panelListItem: [
                            { href: '#', label: 'Formal' },
                            { href: '#', label: 'Casual' },
                            { href: '#', label: 'Perfume' },
                            { href: '#', label: 'Cosmetics' },
                            { href: '#', label: 'Bags' },
                            {
                                href: '#',
                                imgSrc: './assets/images/womens-banner.jpg',
                            },
                        ],
                    },
                    {
                        href: '#',
                        label: 'Electronics',
                        panelListItem: [
                            { href: '#', label: 'Smart Watch' },
                            { href: '#', label: 'Smart TV' },
                            { href: '#', label: 'Keyboard' },
                            { href: '#', label: 'Mouse' },
                            { href: '#', label: 'Microphone' },
                            {
                                href: '#',
                                imgSrc: './assets/images/electronics-banner-2.jpg',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        href: '#',
        label: "Men's",
        dropdownPanels: [
            {
                panelList: [
                    {
                        href: '#',
                        panelListItem: [
                            { href: '#', label: 'Shirt' },
                            { href: '#', label: 'Shorts & Jeans' },
                            { href: '#', label: 'Safety Shoes' },
                            { href: '#', label: 'Wallet' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        href: '#',
        label: "Women's",
        dropdownPanels: [
            {
                panelList: [
                    {
                        href: '#',
                        panelListItem: [
                            { href: '#', label: 'Dress & Frock' },
                            { href: '#', label: 'Earrings' },
                            { href: '#', label: 'Necklace' },
                            { href: '#', label: 'Makeup Kit' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        href: '#',
        label: 'Jewelry',
        dropdownPanels: [
            {
                panelList: [
                    {
                        href: '#',
                        panelListItem: [
                            { href: '#', label: 'Earrings' },
                            { href: '#', label: 'Couple Rings' },
                            { href: '#', label: 'Necklace' },
                            { href: '#', label: 'Bracelets' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        href: '#',
        label: 'Perfume',
        dropdownPanels: [
            {
                panelList: [
                    {
                        href: '#',
                        panelListItem: [
                            { href: '#', label: 'Clothes Perfume' },
                            { href: '#', label: 'Deodorant' },
                            { href: '#', label: 'Flower Fragrance' },
                            { href: '#', label: 'Air Freshener' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        href: '#',
        label: 'Blog',
    },
    {
        href: '#',
        label: 'Hot Offers',
    },
];

export default menuCategory;
