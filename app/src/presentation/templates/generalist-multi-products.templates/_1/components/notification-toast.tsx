import React, { useState } from 'react';

export default function NotificationToast() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return <div className="absolute"></div>;
}
