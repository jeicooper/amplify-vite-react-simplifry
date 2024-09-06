import Navigation from "../Navigation/Navigation";
import '../MasterStyles.css';

//WinterMix is Dye, Ranger Pro, Esplanade, Imazaypere, Boost.


function WinterMix() {

    function WinterCalculate() {
        const map = new Map();
        map.set("Dye", 0.32);
        map.set("Ranger Pro", 1.92);
        map.set("Esplanade", 0.14);
        map.set("Imazapyr", 0.56);
        map.set("Boost", 0.32);

        // Clear existing answers
        document.getElementById("Header").innerHTML = "";
        document.getElementById("answer").innerHTML = "";
        document.getElementById("space").innerHTML = "";

        for (const [key, value] of map) {
            var Gal = document.getElementById("Water").value;
            var gal = parseFloat(Gal);
            var oz = value;
            var answer = oz * gal;
            var Theanswer = +answer.toFixed(2);
            document.getElementById("Header").innerHTML = "You must add: ";
            document.getElementById("answer").innerHTML +=
                " " + Theanswer + " Ounces of " + key + "<br></br>";           
           
        }
        var acres = gal * 0.02;
        document.getElementById("space").innerHTML =
            "This amount will cover " + acres + " acres of land.<br></br>";
    }

    function WinterAcreCalculate() {
        var Acre = document.getElementById("Acres").value;
        var acre = parseFloat(Acre);
        const maps = new Map();
        maps.set("Dye", 0.32);
        maps.set("Ranger Pro", 1.92);
        maps.set("Esplanade", 0.14);
        maps.set("Imazapyr", 0.56);
        maps.set("Boost", 0.32);
        var gallons = acre * 50;

        // Clear existing answers
        document.getElementById("TheHeader").innerHTML = "";
        document.getElementById("TheAnswer").innerHTML = "";
        document.getElementById("Gallons").innerHTML = "";

        for (const [keys, values] of maps) {
            var answers = values * gallons;
            var Theanswers = +answers.toFixed(2);
            document.getElementById("TheHeader").innerHTML = "You must add: ";
            document.getElementById("TheAnswer").innerHTML +=
                " " + Theanswers + " Ounces of " + keys + "<br></br>";
        }
        document.getElementById("Gallons").innerHTML =
            "To " + gallons + " gallons of water";
    }

    return (
        <div>
            <div>
                <Navigation />
            </div>
            <h1>WinterMix</h1>
            <h3>
                This is a combination mix of Dye, Ranger Pro, Esplanade, Imazapyr, and
                Boost.
            </h3>
            <h3>How many gallons of water are in your tank?</h3>
            <input
                id="Water"
                className="water"
                placeholder="Gallons of water"
            ></input>
            <button onClick={WinterCalculate}>Calculate</button>
            <h3 id="Header"></h3>
            <h3 id="answer"></h3>
            <h3 id="space"></h3>
            <h3 id="spaces"></h3>

            <h3>How many acres is the job?</h3>
            <input id="Acres" placeholder="Acres of Land"></input>
            <button onClick={WinterAcreCalculate}>Calculate</button>
            <h3 id="TheHeader"></h3>
            <h3 id="TheAnswer"></h3>
            <h3 id="Gallons"></h3>
        </div>
    );

}



export default WinterMix;