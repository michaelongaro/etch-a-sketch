/* need an onload() function i believe here, or just call right away at minimum */

window.onload = function() { 
    startingGrid(4);
    let validCell = document.getElementById("cell");
    /* WHY can this not see #cell */
    let gridList = document.querySelectorAll(".cell");
    let count = 0;
    console.log(gridList.length);
    for (count = 0; count < gridList.length; count++) {
        gridList[count].addEventListener("mouseover", leaveTrail);
        gridList[count].addEventListener("mouseout", clearTrail);
    }
}

/*document.body.onload = startingGrid*/



function startingGrid(num) {
    let idcounter = 1;
    for (let i = 0; i < 4; i++) {
        let gridCell = document.createElement("div");
        /*let innertext = document.createTextNode("Cell");*/
        /*gridCell.appendChild(innertext);*/
        if (i !== 0) {
            idcounter++;
        }
        gridCell.setAttribute("id", "cell" + idcounter.toString());

        document.getElementById("main-grid-contain").appendChild(gridCell);
        for (let j = 0; j < 3; j++) {
            let gridCell = document.createElement("div");
            /*let test = document.createTextNode("Cell 2");*/
            /*gridCell.appendChild(test);*/
            idcounter++;
            gridCell.setAttribute("id", "cell" + idcounter.toString());
            document.getElementById("main-grid-contain").appendChild(gridCell);
        }   
    }   
    /*console.log(gridCell);*/
}
    
/*
let gridList = document.querySelectorAll("cell");

let validCell = document.getElementById("cell");

if (gridList) {
    gridList[4].addEventListener("onmouseover", leaveTrail);
    gridList[4].addEventListener("onmouseout", clearTrail);
}
*/

/* how to access/properly remove the id while still being able to see cells */
/* use a queryselectorall to target each individual cell, then */
/* then when you target the divs again you can just skip the first major div */



function leaveTrail() {
    /* how would you pinpoint which cell is being hovered/should be targeted */
    /* ^^^^^^ */
    /* ultimately, you would want each cell to have a unique class/id to be able to target a specific one */
    /*validCell.removeAttribute("id");*/
    let gridList = document.querySelectorAll(".cell");
    let leaveCount = 0;
    for (leaveCount = 1; leaveCount < gridList.length+1; leaveCount++) {
        console.log("cell" + leaveCount.toString());
        console.log("shows up!");
        if (document.getElementById("cell" + leaveCount.toString())[leaveCount]) {
            document.getElementById("cell" + leaveCount.toString())[leaveCount].style["background-color"] = "#444";
            }
    }
}

function clearTrail() {
    let gridList = document.querySelectorAll(".darkcell");
    let clearCount = 0;
    for (clearCount = 1; clearCount < gridList.length+1; clearCount++) { 
        if (document.getElementById("darkcell" + clearCount.toString())[clearCount]) {
         document.getElementById("darkcell" + clearCount.toString())[clearCount].style["background-color"] = "#FFFFFF"; 
        }
    }
}















