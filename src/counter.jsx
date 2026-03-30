// var [first, second]  = [2, 5];

// var myNum = [52, 71];
// var [lang, war] = myNum; //[lang, war] = [52, 71]

// function getSomething(){return [52, 71]}
// var [lang, war] = getSomething(); //[lang, war] = [52, 71]

import { useState } from "react"

function Counter(){
    const counterStyle = {
        border: "0.25rem solid teal",
        fontWeight: "bold",
        fontFamily: "Century Gothic"
    }

    let [counting, setCounting] = useState(5)
    const increase = () => setCounting(c => c + 1), 
        decrease = () => setCounting(c => (c > 0 ? c - 1 : 0)), 
        reset = () => setCounting(0); //if I'm using block body `{}` after arrow function, I need to mention return. If I'm using expression body, return is not required.

    return(
        <div style = {counterStyle}>
            <h3>Count : {counting}</h3>
            <button type="button" onClick = {decrease}>Substract</button>
            <button type="button" onClick = {reset}>Reset</button>
            <button type="button" onClick = {increase}>Add</button>
        </div>
    )
}

export default Counter