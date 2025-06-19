import alphaLogo from './assets/ALPHA_Logo_png.png';
import tvLogo from './assets/TV.png';

/**
 * 
 * @component
 * @author Samuel Niang
 * @returns {JSX.Element} 
 */
const MainTitle = () => {
    return (
            
            <h1 id="mainTitle"><img src={alphaLogo} alt="Logo of the ALPHA experiment" />ALPHA TV<img src={tvLogo} alt="Logo of a TV" /></h1>
    );
}
export default MainTitle;