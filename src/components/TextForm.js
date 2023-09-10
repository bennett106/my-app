import React, {useState}from 'react'

export default function TextForm(props) {
    const handleUpperClick = () => {
        console.log("Uppercase button was clicked.");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () => {
        console.log("LowerCase button was clicked.");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On change!!!");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change state.
    // setText ("new text"); /right way to change state.
    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div class="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick} >Convert to lowercase</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>Took {0.008 * text.split(' ').length}s minutes to read.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
