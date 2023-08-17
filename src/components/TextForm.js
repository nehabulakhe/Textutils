import React,{useState} from 'react';


export default function TextForm(props){
    const handleClick = ()=>{
        console.log("Uppercase clicked " + text);
        let newText=text.toUpperCase();
        setText(newText);
        
    }
    const handleOnChange = (event)=>{
        console.log("change");
        setText(event.target.value);
    }
    const handleLo  = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClr  = ()=>{
        let newText="";
        setText(newText);
    }
    const handleInv =()=>{
        var newText= text.split('').reverse().join('');
        setText(newText);
    }
    const handleWel =()=>{
        var newText= " Welcome "+text ;
        setText(newText);
    }
    const[text,setText] = useState("Enter your value here");
    return(
        <>
            <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary"  onClick={handleWel} >Welcome</button>
            <button className="btn btn-primary mx-2" onClick={handleClick} >Convert to Uppercase</button> 
            <button className="btn btn-primary mx-3" onClick={handleLo}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClr}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleInv}>Inverse</button>
            
            </div>

            <div className="container mt-3">
                <h2>Your Summary</h2>
                <p>{text.split(" ").length} words and {text.length } characters</p>
                
            </div>
        </>
        
    )
}