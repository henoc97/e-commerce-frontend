import DropdownPanelistItem, { PanelListProps } from './dropdown-panel-list';

export interface DropdownPanelProps {
    panelList?: PanelListProps[];
}

const DropdownPanel: React.FC<DropdownPanelProps> = ({ panelList }) => {
    return (
        <div className="flex flex-col">
            {panelList !== undefined &&
                panelList.map((item) => (
                    <DropdownPanelistItem
                        href={item.href}
                        label={item.label}
                        panelListItem={item.panelListItem}
                    />
                ))}
        </div>
    );
};

export default DropdownPanel;
