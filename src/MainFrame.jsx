import alphaSetup from './assets/ALPHA-g Schematic_v2.png';
import React, { useState } from 'react';
import './styles/MainFrame.css';
import ElementInfo from './ElementInfo';

/**
 * 
 * @component
 * @author Samuel Niang
 * @returns {JSX.Element} 
 */
const MainFrame = ({ data }) => {
    const [message, setMessage] = useState("");


    const getXY = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        setMessage(`Coordinates: (${xPercent.toFixed(2)}%, ${yPercent.toFixed(2)}%)`);
    };

    return (
        <div id="mainFrame" className="borderContainer">
            <div id="onMouseArea" onMouseMove={getXY}>
                <img src={alphaSetup} alt="Setup of the AlphaExperiment" />
                {data && data.map((element, index) => (
                    <ElementInfo key={index} props={element} />
                ))}
            </div>
            <div>
                {message}
            </div>
        </div>
    );
}
export default MainFrame;