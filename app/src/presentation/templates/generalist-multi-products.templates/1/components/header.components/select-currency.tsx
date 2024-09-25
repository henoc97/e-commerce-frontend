'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Currency } from '@/app/src/domain/enums/currencies.enum';
import SelectDropdown from '../generic.components/select-dropdown';

const currencies = Object.values(Currency);

const CurrencySelect: React.FC = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
        currencies[0]
    );

    return (
        <SelectDropdown
            options={currencies}
            selectedOption={selectedCurrency}
            setSelectedOption={setSelectedCurrency}
            renderOptionLabel={(currency: Currency) => currency}
        />
    );
};

export default CurrencySelect;
