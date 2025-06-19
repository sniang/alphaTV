import alphaSetup from './assets/ALPHA-g Schematic_v2.png';
import React, { useState } from 'react';
import './styles/MainFrame.css';
import Blink from './Blink';
import DisplayInfo from './DisplayInfo';

/**
 * MainFrame component renders the main interactive area for the AlphaExperiment setup.
 * It displays an image, overlays interactive elements, and handles user interactions such as clicks and hovers.
 * On click, it calculates and alerts the relative coordinates within the image.
 * When an element is hovered, detailed information is displayed.
 *
 * @component
 * @param {Object[]} data - Array of element data to be rendered as interactive overlays.
 * @author Samuel Niang
 */
const MainFrame = ({ data }) => {
    const [selectedElement, setSelectedElement] = useState(null);

    const getXY = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        alert(`Coordinates: (${xPercent.toFixed(2)}%, ${yPercent.toFixed(2)}%)`);
    };

    const handleOnclick = (event) => {
        setSelectedElement(null);
        getXY(event);
    };

    return (
        <div id="mainFrame" className="borderContainer">
            <div id="onMouseArea" onClick={handleOnclick}>
                <img src={alphaSetup} alt="Setup of the AlphaExperiment" />
                {data && data.map((element, index) => (
                    <Blink
                        key={index}
                        props={element}
                        onMouseEnter={() => setSelectedElement(element)}
                        onClick={(e) => e.stopPropagation()}
                    />
                ))}
                {selectedElement && <DisplayInfo selectedElement={selectedElement} />}
            </div>
        </div>
    );
}

export default MainFrame;