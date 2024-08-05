import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");   
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been Copied!","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspaces has been Removed","success");
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text has been Cleared!","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
  return (
    <>
    <div className="container my-3" style={{color: props.mode === 'dark'?`white`:`#042743`}}>
        <h1 className="mb-3 text-center">TextUtils - Simplify your Text Editing</h1>
        <div className="mb-3 my-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?`#13466e`:`white`,color: props.mode === 'dark'?`white`:`#042743`}} onChange={handleOnChange} value={text} id="myBox" rows="5"></textarea>
        </div>
        <div className="row">
        <button className="btn btn-primary my-1 mx-1 col" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-1 mx-1 col" disabled={text.length===0} onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-1 mx-1 col" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="row">
        <button className="btn btn-primary my-1 mx-1 col" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-1 mx-1 col" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
        </div>
    </div>
    <div className="container my-3 text-center" style={{color: props.mode === 'dark'?`white`:`#042743`}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}











