import './styles/ElementInfo.css';
import React from 'react';

const ElementInfo = ({  props }) => {
    const {name, x, y, error, comment, setMessage} = props;
    return (
        <div 
            className={`element-info ${error ? "red-bg" : "green-bg"}`}
            style={{
                left: `${x}%`,
                top: `${y}%`,
                position: 'absolute',
                width: '10px',
                height: '10px',
                margin: 0,
                transform: 'translate(-50%, -50%)'
            }}>
        </div>
    );
}

export default ElementInfo;