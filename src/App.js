/* import logo from './logo.svg'; */
import './App.css';
import  colorsData  from "./data/color-data.json";
import {useState} from 'react'
import Datalist from './components/Datalist';
import {AddNewColorForm} from './components/AddNewColorForm.js';
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(colorsData)
  return (
    <>
    <AddNewColorForm onNewColor={(title,color)=>{
      var newColors = [...colors,{
        id:v4(),
        title,
        color,
        rating:0
      }];
      setColors(newColors);
    }}/>
    <Datalist 
    colors={colors}
    onRemoveColor={
      (id)=>{
        var newColors = colors.filter(color=>color.id !== id)
        setColors(newColors)
      }
    }
    onRateColor={
      (id,rating)=>{
        var newColors = colors.map(color=>(color.id == id)?{...color,rating}:color)
        setColors(newColors)
      }
    }/>
    </>
  );
}

export default App;
