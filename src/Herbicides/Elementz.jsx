import React from "react";
import { ReactDOM } from "react";
import Navigation from '../Navigation/Navigation';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import '../MasterStyles.css';


//Element is 0.32 Oz per gallon or 16 oz per 50 gallons



function Element() {
    
    function calculateElement() {
        var Gal = document.getElementById("Water").value;
        var gal = parseFloat(Gal);
        var oz = 0.32;
        var answer = oz * gal;
        var Theanswer = +answer.toFixed(2);
        document.getElementById("answer").innerText = "Add " + Theanswer + " Ounces of Element for " + gal + " gallons of water.";


    }
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <h1>This is the Element calculator</h1>
            <h1>How many gallons of water are in your tank?</h1>
            <input id="Water" className='water' placeholder="Gallons of water"></input>
            <button onClick={calculateElement}>Calculate</button>
            <h1 id='answer'></h1>
        </div>
    );


}
export default Element;
