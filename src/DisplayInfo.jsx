
import React from 'react';
import './styles/DisplayInfo.css';

const DisplayInfo = ({ selectedElement }) => {

    return (
        <div>
            {selectedElement && (
                <div className='element-info'
                    style={{
                        left: `${selectedElement.x}%`,
                        top: `${selectedElement.y}%`,
                        position: 'absolute',
                        margin: 0,
                        // transform: 'translate(-50%, -50%)'
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