import './styles/Blink.css';

const Blink = ({  props, onMouseEnter, onMouseLeave }) => {
    const {x, y, error} = props;
    return (
        <div 
            className={`element-info ${error ? "red-bg" : "green-bg"}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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

export default Blink;