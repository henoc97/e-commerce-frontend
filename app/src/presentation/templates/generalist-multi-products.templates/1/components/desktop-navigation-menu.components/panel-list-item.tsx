import Image from 'next/image';

export interface ListItemProps {
    href: string;
    label?: string;
    imgSrc?: string;
}

const PanelistItem: React.FC<ListItemProps> = ({
    href = '#',
    label,
    imgSrc,
}) => {
    return (
        <li className="my-1 mx-3">
            <a href={href}>
                {imgSrc && (
                    <Image
                        src={imgSrc}
                        alt="Subsribe NewLetter"
                        width={400}
                        height={400}
                        objectFit="cover"
                        className="rounded-lg"
                    />
                )}
                {label && (
                    <span className="transition-colors duration-300 ease-out hover:text-salmonP1">
                        {label}
                    </span>
                )}
            </a>
        </li>
    );
};

export default PanelistItem;
