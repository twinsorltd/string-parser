import React, { useState } from 'react';
import './App.css';

export const parseData = ( originalText: string ): string => {

    let parsedData = '';
    let cleanInput = '';

    // cleaning the string from the annoying quotes
    cleanInput = originalText.replaceAll( '“', '"' );
    cleanInput = cleanInput.replaceAll( '”', '"' );


    // special case A
    // tackling this case:
    // Change the product attribute to “["Multicoloured"]” 
    cleanInput = cleanInput.replaceAll( '"["', '"<<<' );
    cleanInput = cleanInput.replaceAll( '"]"', '>>>"' );

    const lines = cleanInput.split(/\r?\n/);

    const searchRegex = /"(.*?[^\\])"/g;
    
    lines.forEach( ( singleLine, index ) => {
        const matchObj = singleLine.match( searchRegex );
        const word = matchObj && matchObj[1] ? matchObj[1] : '';

        let finalword = word;

        if ( finalword ) {
            // removing the quotes
            finalword = word.replaceAll( '"', '' );
            // reconstructing special case A
            finalword = finalword.replaceAll( '<<<', '["' );
            finalword = finalword.replaceAll( '>>>', '"]' );
        }

        parsedData = index === 0 ? `${ parsedData }${finalword}` : `${ parsedData }\n${finalword}`
    } )

    return parsedData;
}

function App() {
  
    const [ textInput, setTextInput ] = useState( '' );

    let parsedData = '';

    if ( textInput ) {
        parsedData = parseData( textInput );
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
            Twinsor LTD &copy; 2023 - <a href='https://github.com/twinsorltd/string-parser'>Source Code</a>
        </div>
    </div>
  );
}

export default App;
