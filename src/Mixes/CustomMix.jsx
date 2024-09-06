
    

import Navigation from '../Navigation/Navigation';
import '../MasterStyles.css';
import React, { useState, useEffect, onSelect } from 'react';
import Boost from '../Herbicides/Boost';
import Dye from '../Herbicides/Dye';
import Element from '../Herbicides/Elementz';
import Esplanade from '../Herbicides/Esplanade';
import Glyphosate from '../Herbicides/Glyphosate';
import Imazapyr from '../Herbicides/Imazapyr';
import Oust from '../Herbicides/Oust';



function CustomMix() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [itemInfo, setItemInfo] = useState({});
    const [quantity, setQuantity] = useState(0);

    const handleSelect = (e) => {
        const value = e.target.value;
        setSelectedItems((selectedItems) => {
            if (selectedItems.includes(value)) {
                return selectedItems.filter((item) => item !== value);
            }
            return [...selectedItems, value];
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemData = {
            boost: { name: "Boost", perGal: 0.32 },
            element: { name: "Element", perGal: 0.32 },
            esplanade: { name: "Esplanade", perGal: 0.14 },
            rangerpro: { name: "RangerPro", perGal: 1.92 },
            imazapyr: { name: "Imazapyr", perGal: 0.56 },
            oust: { name: "Oust", perGal: 0.08 },
        };

        const newItems = {};
        selectedItems.forEach((item) => {
            if (itemData[item]) {
                newItems[item] = itemData[item];
            }
        });
        setItemInfo(newItems);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
    };

    const getTotalCost = (item) => {
        return (item.perGal * quantity).toFixed(2);
    };

    return (
        <>
                    
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="checkbox"
                        value="boost"
                        onChange={handleSelect}
                        checked={selectedItems.includes("boost")}
                    />
                    Boost
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="element"
                        onChange={handleSelect}
                        checked={selectedItems.includes("element")}
                    />
                    Element
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="esplanade"
                        onChange={handleSelect}
                        checked={selectedItems.includes("esplanade")}
                    />
                    Esplanade
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="rangerpro"
                        onChange={handleSelect}
                        checked={selectedItems.includes("rangerpro")}
                    />
                    RangerPro
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="imazapyr"
                        onChange={handleSelect}
                        checked={selectedItems.includes("imazapyr")}
                    />
                    Imazapyr
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="oust"
                        onChange={handleSelect}
                        checked={selectedItems.includes("oust")}
                    />
                    Oust
                </label>
                <br />
                <label>
                    Gallons:
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="0"
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            <div>
                {Object.keys(itemInfo).map((key) => {
                    const item = itemInfo[key];
                    return (
                        <div key={key}>
                            <h3>{item.name}</h3>
                            <p>
                                Ratio: {item.perGal} | Add: {getTotalCost(item)} oz
                            </p>
                        </div>
                    );
                })}
            </div>
            </div>
        </>
    );
}
export default CustomMix;