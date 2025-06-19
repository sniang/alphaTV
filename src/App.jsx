import './styles/App.css'
import MainTitle from './MainTitle'
import MainFrame from './MainFrame'

function App() {

  return (
    <>
      <MainTitle />
      <MainFrame data={data} />
      <h1>It's just a demo</h1>
    </>
  )
}

export default App;

const data = [
  { name: "BDS", x: 95.50, y: 80, error: false, comment: "It's BDS stick" },
  { name: "PDS", x: 78.9, y: 80, error: false, comment: "" },
  { name: "DSAT", x: 53.56, y: 80, error: false, comment: "" },
  { name: "USAT", x: 28.8, y: 80, error: true, comment: "" },
  { name: "DSCT", x: 22.82, y: 80, error: true, comment: "" }
];