import React, { useState } from 'react';
import './App.css';

function App() {
  
    const [ textInput, setTextInput ] = useState( '' );
    
    let parsedData = '';

    if ( textInput ) {
        
        let cleanInput = '';

        // cleaning the string from the annoying quotes
        cleanInput = textInput.replaceAll( '“', '"' );
        cleanInput = cleanInput.replaceAll( '”', '"' );

        const lines = cleanInput.split(/\r?\n/);

        const searchRegex = /(?<=(['"])\b)(?:(?!\1|\\).|\\.)*(?=\1)/g;
        
        lines.forEach( ( singleLine, index ) => {
            const matchObj = singleLine.match( searchRegex );
            const word = matchObj ? matchObj[1] : '';
            parsedData = index === 0 ? `${ parsedData }${word}` : `${ parsedData }\n${word}`
        } )

    }

    
    return (
    <div className='App'>
        <h1>String parser</h1>

        <div className='wrapper'>
            <div className='sourceLeft'>
                <h2>Paste here the original lines</h2>

                <textarea 
                    className='textInput' 
                    onChange={ ( event ) => {
                        setTextInput( event.target.value )
                    } }
                />
            </div>

            <div className='resultRight'>
                <h2>Parsed data will appear here</h2>

                <textarea 
                    className='textInput' 
                    defaultValue={ parsedData }
                />
            </div>
        </div>

        <div className='footer'>
            Twinsor LTD &copy; 2022 - <a href='https://github.com/twinsorltd/string-parser'>Source Code</a>
        </div>
    </div>
  );
}

export default App;
