import alphaLogo from './assets/ALPHA_Logo_png.png';

/**
 * 
 * @component
 * @author Samuel Niang
 * @returns {JSX.Element} 
 */
const MainTitle = () => {
    return (
            <div id="mainTitle">
                <img src={alphaLogo} alt="Logo of the ALPHA experiment" />
                <h1>ALPHA TV</h1>
            </div>
    );
}
export default MainTitle;