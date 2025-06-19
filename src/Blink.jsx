import './styles/Blink.css';

const Blink = ({  props, onMouseEnter, onClick }) => {
    const {x, y, error} = props;
    return (
        <div 
            className={`blink ${error ? "red-bg" : "green-bg"}`}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            style={{
                left: `${x}%`,
                top: `${y}%`,
                position: 'absolute',
                margin: 0,
                transform: 'translate(-50%, -50%)'
            }}>
        </div>
    );
}

export default Blink;