'use client';

import ActionBtn from '../buttons.components/user-actions';

const userActions = [
    { icon: 'user', count: null, onclick: () => 'onclick' },
    { icon: 'heart', count: 2, onclick: () => 'onclick' },
    { icon: 'cart', count: 3, onclick: () => 'onclick' },
];

const HeaderUserActions: React.FC = () => {
    return (
        <ul className="flex flex-row mb-4">
            {userActions.map((action, index) => (
                <ActionBtn
                    key={index}
                    icon={action.icon}
                    count={action.count}
                    onClick={action.onclick}
                />
            ))}
        </ul>
    );
};

export default HeaderUserActions;
