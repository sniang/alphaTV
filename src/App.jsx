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
  { name: "PDS", x: 95.50, y: 80.9, error: false, comment: "It's PDS stick" },
  { name: "BDS", x: 78.7, y: 80.9, error: false, comment: "" },
  { name: "DSAT", x: 53.45, y: 80.9, error: false, comment: "" },
  { name: "USAT", x: 28.6, y: 80.9, error: true, comment: "" },
  { name: "DSCT", x: 22.6, y: 80.9, error: true, comment: "" }
];