import alphaLogo from './assets/ALPHA_Logo_png.png';
import './styles/App.css';

/**
 * 
 * @component
 * @author Samuel Niang
 * @returns {JSX.Element} 
 */
/**
 * MainTitle component displays the main title section of the ALPHA TV application,
 * including the ALPHA experiment logo and the application title.
 *
 * @component
 * @returns {JSX.Element} A div containing the ALPHA logo and the main heading.
 * @author Samuel Niang
 */
const MainTitle = () => {
    return (
        <div id="mainTitle">
            <img
                src={alphaLogo}
                alt="Logo of the ALPHA experiment" />
            <h1>ALPHA TV</h1>
        </div>
    );
}

export default MainTitle;