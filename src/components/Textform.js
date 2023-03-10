import React, { useState } from 'react';


export default function Textform(props) {

    const HandlethisUCClick = () => {
        //console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const HandlethisLCClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const HandleClearClick = () => {
        let newText = " ";
        setText(newText)
    }

    const HandleonChange = (event) => {
        //console.log("Handling")
        setText(event.target.value)
    }


    const HandleCopyClick = () => {
        //let text = document.getElementById("myBox");
        //text.select();
        navigator.clipboard.writeText(text)
    }

    const HandleES = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");
    


    return (
        <>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HandleonChange} style={{backgroundColor: props.mode==='dark'?'#0b0e37':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea> 
                </div>
                <button disabled={text.length===0}className={props.btntype} onClick={HandlethisUCClick} >Convert to UpperCase</button>
                <button disabled={text.length===0} className={props.btntype} onClick={HandlethisLCClick} >Convert to LowerCase</button>
                <button disabled={text.length===0}className={props.btntype} onClick={HandleClearClick} >Clear Text</button>
                <button disabled={text.length===0}className={props.btntype} onClick={HandleCopyClick} >Copy Text</button>
                <button disabled={text.length===0}className={props.btntype} onClick={HandleES} >Remove Extra Spaces</button>

                <div className="container my-3">
                    <h3>Text Summary</h3>
                    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>Will take {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read </p>
                    <h3>Preview</h3>
                    <p>{text.length>0?text:"Enter Something in textbox to preview it here"}</p>
                </div>
            </div>
        </>
    )
}
