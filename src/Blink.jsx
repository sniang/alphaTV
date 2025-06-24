import './styles/Blink.css';

/**
 * Blink component renders a colored indicator at a specified position.
 * The indicator's color reflects the error state and supports mouse events.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {{ x: number, y: number, error: boolean }} props.props - Position and error state.
 * @param {function} [props.onMouseEnter] - Handler for mouse enter event.
 * @param {function} [props.onClick] - Handler for click event.
 *
 * @returns {JSX.Element} The rendered Blink indicator.
 *
 * @author Samuel Niang
 */
const Blink = ({ element, onMouseEnter, onClick }) => {
    const { x, y, error } = element;
    return (
        <div
            className={`blink ${error ? "red-bg" : "green-bg"}`}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            style={{
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
            }}>
        </div>
    );
}

export default Blink;