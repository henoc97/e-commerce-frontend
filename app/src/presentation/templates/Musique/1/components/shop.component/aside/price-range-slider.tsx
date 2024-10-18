"use client"

import { useState } from 'react';
import { Slider } from '../../../../../../components/ui/sidebar';

const PriceRangeSlider: React.FC = () => {
    const [priceRange, setPriceRange] = useState([0, 1000]);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
            <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
            />
            <div className="flex justify-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
