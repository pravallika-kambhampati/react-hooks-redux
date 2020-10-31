// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from 'react'
import Convert from './Convert';
import Dropdown from "./Dropdown";

const options = [
    {
        label: 'Hindi',
        value: 'hi'
    }, 
    {
        label: 'French',
        value: 'fr'    
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label : 'Telugu',
        value: 'te'
    },
    {
        label: 'Zulu',
        value: 'zu'
    }

]

export default function Translate() {

    const [lang, setLang] = useState(options[0])
    const [text, setText] = useState('');
 
    return (
        <div>
            <div className="ui form">
                <div className="field">
                 <label>Enter Text</label>   
                <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
            options={options} 
            selected={lang}
            onSelectedChange={setLang}
            label="Select a Language"
            />
            <hr />
            <h3 className="ui header">Output:</h3>
            <Convert text={text} language={lang} />
        </div>
    )
}
