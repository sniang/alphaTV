import React, { useState } from 'react'
import './styles/App.css'
import MainTitle from './MainTitle'
import MainFrame from './MainFrame'

function App() {

  const data = [
        { name: "BDS", x: 95.50, y: 80.0, error: false, comment: "" },
        { name: "PDS", x: 78.9, y: 80.0, error: false, comment: "" },
        { name: "DSAT", x: 53.56, y: 80.0, error: false, comment: ""},
        { name: "USAT", x: 22.82, y: 80.0, error: true, comment: ""}
    ];

  return (
    <>
    <MainTitle />
    <MainFrame data={data}/>
    </>
  )
}

export default App
