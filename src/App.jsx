import React, { useState } from 'react'
import './styles/App.css'
import MainTitle from './MainTitle'
import MainFrame from './MainFrame'
import DisplayInfo from './DisplayInfo'



function App() {
  const [selectedElement, setSelectedElement] = useState(null);


  return (
    <>
      <MainTitle />
      <MainFrame data={data} setSelectedElement={setSelectedElement} />
      <DisplayInfo selectedElement={selectedElement} />
    </>
  )
}

export default App;

const data = [
  { name: "BDS", x: 95.50, y: 80.0, error: false, comment: "It's BDS stick" },
  { name: "PDS", x: 78.9, y: 80.0, error: false, comment: "" },
  { name: "DSAT", x: 53.56, y: 80.0, error: false, comment: "" },
  { name: "USAT", x: 28.8, y: 80.0, error: true, comment: "" },
  { name: "DSCT", x: 22.82, y: 80.0, error: true, comment: "" }
];