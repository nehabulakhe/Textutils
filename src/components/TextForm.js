import React,{useState} from 'react';


export default function TextForm(props){
    const handleClick = ()=>{
    
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase ","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLo  = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase ","success");
    }
    const handleClr  = ()=>{
        let newText="";
        setText(newText);
        props.showAlert("Clear Text ","success");
    }
    const handleInv =()=>{
        var newText= text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reverse the Text ","success");
    }
    const handleWel =()=>{
        var newText= " Welcome "+text ;
        setText(newText);
        props.showAlert("Welcoming the Text ","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
       // document.getSelection.removeAllRanges();
        props.showAlert("Copy to ClipBoard ","success");

    }
    const extraSpace = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra spaces ","success");
    }

    const[text,setText] = useState("");
    return(
        <>
            <div className="container my-5" style={{color:props.mode === 'dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" disabled={text.length===0} onClick={handleWel} >Welcome</button>
            <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleClick} >Convert to Uppercase</button> 
            <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleLo}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleClr}>Clear</button>
            <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleInv}>Inverse</button>
            <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={extraSpace}>Remove Extra Space</button>
            
            <h2 className='mt-4'>Your Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length } characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview ... "}</p>
            </div>

           
        </>
        
    )
}