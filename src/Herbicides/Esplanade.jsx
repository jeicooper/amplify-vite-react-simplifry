import React from "react";
import { ReactDOM } from "react";
import Navigation from '../Navigation/Navigation';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import '../MasterStyles.css';

//Esplande is 0.14 Oz per gallon or 7 oz per 50 gallons



function Esplanade() {

    function calculateEsplanade() {
        var Gal = document.getElementById("Water").value;
        var gal = parseFloat(Gal);
        var oz = 0.14;
        var answer = oz * gal;
        var Theanswer = +answer.toFixed(2);
        document.getElementById("answer").innerText = "Add " + Theanswer + " Ounces of Esplanade for " + gal + " gallons of water.";
    }

    return (
        <div>
            <div>
                <Navigation />
            </div>
            <h1>This is the Esplanade calculator</h1>
            <h1>How many gallons of water are in your tank?</h1>
            <input id="Water" className='water' placeholder="Gallons of water"></input>
            <button onClick={calculateEsplanade}>Calculate</button>

            <h1 id='answer'></h1>
        </div>
    );


}
export default Esplanade;