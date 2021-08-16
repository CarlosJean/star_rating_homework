import { useRef, useState } from "react";
import { useInput } from "../hooks";

export const AddNewColorForm = ({onNewColor = f=>f})=>{    

    /* Using refs */
    /* const txtTitle = useRef();
    const txtColor = useRef(); */
    /* Using refs */

    /* const [title, setTitle] = useState("")
    const [color, setColor] = useState("") */

    const [title, setTitle] = useInput("")
    const [color, setColor] = useInput("#000000")
    

    const submit = (e)=>{
        e.preventDefault();
        /* Using refs */
        /* const title = txtTitle.current.value;
        const color = txtColor.current.value; */
        /* Using refs */

        onNewColor(title.value, color.value); 
        setTitle()       
        setColor()       
        /* txtTitle.current.value = "";
        txtColor.current.value = ""; */
    }


    return (
        <form onSubmit={submit}>
            {/* Using refs */}
            {/* <input ref={txtTitle} type="text" placeholder="Ingrese un título" required/>
            <input ref={txtColor} type="color" required /> */}
            {/* Using refs */}
            {/* <input value={title} onChange={(e)=>setTitle(e.target.value) }type="text" placeholder="Ingrese un título" required/>
            <input value={color} onChange={(e)=>setColor(e.target.value) }type="color" required /> */}
            <input {...title} type="text" placeholder="Ingrese un título" required/>
            <input {...color} type="color" required />
            <button type="submit">Add</button>
        </form>
    )
}