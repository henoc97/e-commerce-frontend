import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                /* pallet1 */
                // 60
                charcoalgrayP1: '#34495E',
                // 30
                salmonP1: '#FB923C',
                brightorangeP1: '#E67E22',
                // 10
                mintgreenP1: '#2ECC71',
                // Complementaries
                lightgrayP1: '#BDC3C7',
                brickredP1: '#C0392B',

                /* pallet2 */
                sapphireP2: '#1E3A8A',
                turquoiseP2: '#38BDF8',
                mintgreenP2: '#34D399',

                /* pallet3 */
                offwhiteP3: '#F9FAFB',
                darkgrayP3: '#111827',
                // salmonP1

                /* pallet4 */
                lightgrayP4: '#F3F4F6',
                royalpurpleP4: '#8B5CF6',
                bordeauxP4: '#B91C1C',

                /* pallet5 */
                bluishgray: '#6B7280',
                // sapphireP2: '---',
                // turquoiseP2: '---,
            },
        },
    },
    plugins: [],
};
export default config;
