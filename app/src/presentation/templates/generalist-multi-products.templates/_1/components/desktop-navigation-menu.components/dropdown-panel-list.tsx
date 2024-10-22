import PanelistItem, { ListItemProps } from './panel-list-item';

export interface PanelListProps {
    href: string;
    label?: string;
    panelListItem: ListItemProps[];
}

const DropdownPanelistItem: React.FC<PanelListProps> = ({
    href = '#',
    label,
    panelListItem,
}) => {
    return (
        <ul
            className={`absolute transition-all duration-700 z-10 rounded-md mt-3 
                        shadow-xl bg-white w-auto 
                        border border-gray-300 
                        transform opacity-0 
                        scale-y-0 
                        origin-bottom 
                        ${panelListItem.length > 0 ? 'transition-transform transition-opacity duration-500 scale-y-100 opacity-100' : ''}`}
        >
            <li>
                <a href={href}>{label !== undefined && label}</a>
            </li>

            {panelListItem.map((panel) => (
                <PanelistItem
                    key={panel.label}
                    href={panel.href}
                    label={panel.label}
                />
            ))}
        </ul>
    );
};

export default DropdownPanelistItem;
