'use client';

import { useRef, useState, useEffect } from 'react';
import SelectDropdown from '../generic.components/select-dropdown';

const languages = [
    { value: 'fr', name: 'Français' },
    { value: 'en-US', name: 'English' },
    { value: 'es-ES', name: 'Español' },
];
const SelectLanguage: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState(languages[0]);

    return (
        <SelectDropdown
            options={languages}
            selectedOption={selectedLang}
            setSelectedOption={setSelectedLang}
            renderOptionLabel={(lang) => lang.name}
        />
    );
};

export default SelectLanguage;
