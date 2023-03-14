import React,{useState} from 'react'
import './TextForm.css'
export default function TextForm(props) {
    const [text,setText] = useState('');
    const [bold,setBold] = useState(false);
    const [italique,setItalique] = useState(false);
    
   
    const handleUpClick = () =>
    {
      if(text.length === 0 )
      {
        props.alert('Cannot leave textbox empty', 'danger');
      }
        else if(text === text.toUpperCase())
        {
          props.alert('text is already in uppercase', 'danger');
            return;
        }
        let changedText = text.toUpperCase();
        setText(changedText);
        
    }
    const handleLoClick = () =>
    {
      if(text.length === 0 )
      {
        props.alert('Cannot leave textbox empty', 'danger');
      }
        else if(text === text.toLowerCase())
        {
          props.alert('text is already in lowercase', 'danger');
            return;
        }
        let changedText = text.toLowerCase();
        setText(changedText);
        
    }
    const changeVal = (event) =>
    {
      
      if(text !== event.target.value)
      {
        setBold(false);
        setItalique(false);
      }
      setText(event.target.value);

      
    }

    const clearText = () =>
    {
      setText('');
      setBold(false);
      setItalique(false);
    }
    const ChangeToBold = () =>
    {
      if(text.length === 0 )
      {
        props.alert('Cannot leave textbox empty', 'danger');
      }
      else
      {
      setBold(true);
      }
    }
    const ChangeToItalique = () =>
    {
      if(text.length === 0 )
      {
        props.alert('Cannot leave textbox empty', 'danger');
      }
      else
      {
      setItalique(true);
      }
    }
    const copyToClipboard = () =>
    {
      if(text.length === 0 )
      {
        props.alert('no text to copy', 'danger');
        return;
      }
      
      navigator.clipboard.writeText(text);
      props.alert('Text Copied','success');
    }
  return (
    <>
    <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className={`form-control ${italique ? 'italique' : ''}`} value={text} placeholder='Enter text here' onChange={changeVal} style={{backgroundColor : props.mode === 'dark' ? 'grey':'white', color : props.mode === 'dark' ? 'white': 'black',zIndex : -1 }} id={bold ? 'bold': ''} rows="10"></textarea>
    <button className="btn btn-primary my-3 mx-2"  onClick={handleUpClick} >Convert to UPPERCASE</button>
    <button className="btn btn-primary my-3 mx-2"  onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary my-3 mx-2"  onClick={ChangeToBold}>Bold</button>
    <button className="btn btn-primary my-3 mx-2"  onClick={ChangeToItalique}>Italique</button>
    <button className="btn btn-primary my-3 mx-2"  onClick={clearText}>Clear</button>
    <button className="btn btn-primary my-3 mx-2"  onClick={copyToClipboard}>Copy</button>
    </div>
    <div className="container my-3">
      <h1>Text Summary</h1>
      <h4>WORDS - {text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</h4>
      <h4>CHARACTERS - {text.length}</h4>
      <h4>Estimated time to read - {0.008*(text.split(" ").length)} minute</h4>
      <h2 className='my-2'>Preview</h2>
      <h4>{text}</h4>
    </div>
</>
  )
}
