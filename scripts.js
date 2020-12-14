/* need an onload() function i believe here, or just call right away at minimum */

document.body.onload = startingGrid;

function startingGrid(num) {
    for (let i = 0; i < 4; i++) {
        let gridCell = document.createElement("div");
        let test = document.createTextNode("Cell");
        gridCell.appendChild(test);
        gridCell.setAttribute("id", "cell");

        document.getElementById("main-grid-contain").appendChild(gridCell);
        for (let j = 0; j < 3; j++) {
            let gridCell = document.createElement("div");
            let test = document.createTextNode("Cell 2");
            gridCell.appendChild(test);
            gridCell.setAttribute("id", "cell");
            document.getElementById("main-grid-contain").appendChild(gridCell);
        }   
    }   
}

let validCell = document.getElementById("cell");

if (validCell) {
    validCell.addEventListener("onmouseenter", leaveTrail);
    validCell.addEventListener("onmouseout", leaveTrail);
}

/* how to access/properly remove the id while still being able to see cells */
/* use a queryselectorall to target each individual cell, then */
/* then when you target the divs again you can just skip the first major div */

function leaveTrail() {
    validCell.removeAttribute("id");
    document.getElementById("cell").setAttribute("id", "darkcell");
   
}

function clearTrail() {
    document.getElementById("cell").setAttribute("id", "cell");
}















