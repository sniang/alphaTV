import alphaSetup from './assets/ALPHA-g Schematic_v2.png';
import React, { useState } from 'react';
import './styles/MainFrame.css';

/**
 * 
 * @component
 * @author Samuel Niang
 * @returns {JSX.Element} 
 */
const MainTitle = () => {
    const [message, setMessage] = useState("Welcome to ALPHA TV");
    return (
            <div id="mainFrame" className="borderContainer">
                <img src={alphaSetup} alt="Setup of the AlphaExperiment" />
                <div>
                    {message}
                </div>
            </div>
    );
}
export default MainTitle;