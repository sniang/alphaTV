import React, { useState } from 'react'
import './styles/App.css'
import MainTitle from './MainTitle'
import MainFrame from './MainFrame'



function App() {

  return (
    <>
      <MainTitle />
      <MainFrame data={data} />
    </>
  )
}

export default App;

/**
 * Array of data objects representing various entities with their respective properties.
 *
 * @typedef {Object} DataItem
 * @property {string} name - The name of the entity.
 * @property {number} x - The x-coordinate or value associated with the entity.
 * @property {number} y - The y-coordinate or value associated with the entity.
 * @property {boolean} error - Indicates whether the entity has an error.
 * @property {string} comment - Additional comments or notes about the entity.
 *
 * @type {DataItem[]}
 * @author Samuel Niang
 */
const data = [
  { name: "BDS", x: 95.50, y: 80, error: false, comment: "It's BDS stick" },
  { name: "PDS", x: 78.9, y: 80, error: false, comment: "" },
  { name: "DSAT", x: 53.56, y: 80, error: false, comment: "" },
  { name: "USAT", x: 28.8, y: 80, error: true, comment: "" },
  { name: "DSCT", x: 22.82, y: 80, error: true, comment: "" }
];