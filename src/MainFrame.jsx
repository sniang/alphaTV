import alphaSetup from './assets/ALPHA-g Schematic_v2.png';
import React, { useState } from 'react';
import './styles/MainFrame.css';
import Blink from './Blink';

/**
 * 
 * @component
 * @author Samuel Niang
 * @returns {JSX.Element} 
 */
const MainFrame = ({ data, setSelectedElement }) => {

    const getXY = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        alert(`Coordinates: (${xPercent.toFixed(2)}%, ${yPercent.toFixed(2)}%)`);
    };

    const handleElementMouseEnter = (element) => {
        setSelectedElement(element);
    };

    return (
        <div id="mainFrame" className="borderContainer">
            <div id="onMouseArea" onClick={getXY}>
                <img src={alphaSetup} alt="Setup of the AlphaExperiment" />
                {data && data.map((element, index) => (
                    <Blink
                        key={index}
                        props={element}
                        onMouseEnter={() => setSelectedElement(element)}
                        onMouseLeave={() => setSelectedElement(null)}
                    />
                ))}
            </div>
        </div>
    );
}
export default MainFrame;