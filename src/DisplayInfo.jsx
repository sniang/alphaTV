
import React from 'react';
import './styles/DisplayInfo.css';

/**
 * DisplayInfo component renders detailed information about a selected element.
 * It displays the element's name, error status, and any associated comment,
 * positioning the info box absolutely based on the element's x and y coordinates (as percentages).
 *
 * @component
 * @param {Object} props
 * @param {Object} props.selectedElement - The currently selected element whose information is to be displayed.
 * @param {string} props.selectedElement.name - The name of the selected element.
 * @param {number} props.selectedElement.x - The horizontal position (in %) for the info box.
 * @param {number} props.selectedElement.y - The vertical position (in %) for the info box.
 * @param {boolean} [props.selectedElement.error] - Indicates if there is an error with the element.
 * @param {string} [props.selectedElement.comment] - Optional comment associated with the element.
 *
 * @returns {JSX.Element} The rendered info box for the selected element, or null if no element is selected.
 *
 * @author Samuel Niang
 */
const DisplayInfo = ({ selectedElement }) => {

    return (
        <div>
            {selectedElement && (
                <div className='element-info'
                    style={{
                        left: `${selectedElement.x}%`,
                        top: `${selectedElement.y}%`,
                        position: 'absolute',
                        margin: 0
                    }}>
                    <strong>{selectedElement.name}</strong><br />
                    {selectedElement.error && "There is an error with this element."}
                    {selectedElement.comment && <>Comment: {selectedElement.comment}</>}
                    </div>
            )}
        </div>
    );
}

export default DisplayInfo;