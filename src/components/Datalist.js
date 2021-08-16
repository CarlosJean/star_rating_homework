import { useContext } from "react"
import { ColorContext } from ".."
import Color from "./Color"

const Datalist = ()=>{
    const {colors} = useContext(ColorContext)
    if (!colors.length) 
        return (<p>No color (add some new)</p>) 

    return (colors.map((color)=>
        <Color {...color} key={color.id}/>)
    )
}

export default Datalist 