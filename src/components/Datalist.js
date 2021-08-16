import Color from "./Color"

const Datalist = ({colors = [], onRemoveColor = f => f, onRateColor=f=>f})=>{
    if (!colors.length) 
        return (<p>No color (add some new)</p>) 

    return (colors.map((color)=>
        <Color {...color} key={color.id} onRemove={()=>onRemoveColor(color.id)} onRate={onRateColor}/>)
    )
}

export default Datalist 