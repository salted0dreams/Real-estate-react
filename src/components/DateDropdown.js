import React, { useState, useContext } from 'react';


// import context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
    const { date, setDate } = useContext(HouseContext);


    return (
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

    );
};

export default PriceRangeDropdown;
