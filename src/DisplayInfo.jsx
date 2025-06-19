
import React from 'react';

const DisplayInfo = ({ selectedElement }) => {
    
    return (
        <div>
                {selectedElement && (
                    <div>
                        <h4>{selectedElement.name}</h4>
                        <div>{selectedElement.error && "There is an error with this element."}</div>
                        {selectedElement.comment && <>Comment: {selectedElement.comment}</>}
                    </div>
                )}
        </div>
    );
}

export default DisplayInfo;