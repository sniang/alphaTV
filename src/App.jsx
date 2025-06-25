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
  { name: "PB2", x: 70, y: 40, mcpName: "PB2", error: false, comment: "" },
  { name: "PDS", x: 95.50, y: 80.9, mcpName: "PDS", error: false, comment: "" },
  { name: "BDS", x: 78.7, y: 80.9, mcpName: "BDS", error: false, comment: "" },
  { name: "DSAT", x: 53.45, y: 80.9, mcpName: "AT", error: false, comment: "" },
  { name: "USAT", x: 28.6, y: 80.9, mcpName: "AT_US", error: false, comment: "" },
  { name: "DSCT", x: 22.6, y: 80.9, mcpName: "CT", error: false, comment: "" }
];

//AT, AT_US, BDS, CT, CT_US, LDS, PB2, PDS, UDS