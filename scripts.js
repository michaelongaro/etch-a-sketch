let randomized = false;
let showTrail = true;
let timesPassedOver = 0;
let cellArr = [];
window.onload = function() { 
    startingGrid(4);
    document.getElementById("main-grid-contain").style.gridTemplateColumns = "repeat(4, 100px)";
    /* make 16 len arr here too */
    /* cellArr = */
    /* want to initialize with 0's first so that you can iterate over it (check on this logic) */
    
    $("#change-grid-size") 
        .click(function() {
            let newSize = parseInt(prompt("Please enter desired number of cells"));
            resetGrid();
            startingGrid(newSize);
            /* create array of newSize */
            document.getElementById("main-grid-contain").style.gridTemplateColumns = `repeat(${newSize} , 100px)`;
            /* document.getElementById("main-grid-contain").style.backgroundColor = "red"; */
            /* probably want to scale the size of the cells based on the number returned */
            timesPassedOver = 0;
    })
    
    $("#randomize-colors")
        .click(function() {
        if (!randomized) {
            randomized = true;
            console.log(randomized);
        }
        else {
            randomized = false;
            console.log(randomized);
        }
        timesPassedOver = 0;
    });
    
    $("#trail-toggle")
        .click(function() {
        if (!showTrail) {
            showTrail = true;
            console.log(showTrail);
        }
        else {
            showTrail = false;
            console.log(showTrail);
        }
        timesPassedOver = 0;
    })
    
    $("#main-grid-contain div")
        /*if (randomized === true) {
            .mouseover(function() {
                $(this).style.backgroundColor = "#444444";
            });
            .mouseout(function() {
                $(this).style.backgroundColor = "#FFFFFF";
            });
        }
        */
            .mouseover(function() {
                /* need to make this PER CELL also need to CHANGE THIS */
                if (timesPassedOver < 10) {
                    timesPassedOver++;
                    
                    /* use this + .slice....but you need to stop at first 'l' */
                        let currentSelectedID = $(this).attr("id");
                    /*for (let q = len()) */
                    
                    if (randomized) {
                        $(this).css("background-color", `rgb(${applyRandomColor()}, ${applyRandomColor()}, ${applyRandomColor()},                           ${timesPassedOver * 0.1})`);
                        console.log("hit");
                    }
                    else {
                        $(this).css("background-color", `rgb(255,255,255, ${timesPassedOver * 0.1})`);
                        /*$(this).toggleClass("darkcell");*/   
                    }
                }
            })
    
            
            .mouseout(function() {
                if (!showTrail) {
                    $(this).css("background-color", "#FFFFFF");
                }
            })
    
            
    
}

function applyRandomColor() {
    return Math.floor(Math.random(0, 1) * 255);
}


function resetGrid() {
    $("#main-grid-contain").children().remove();
    
}

function startingGrid(num) {
    let idcounter = 1;
    for (let i = 0; i < num ** 2; i++) {
        let gridCell = document.createElement("div");
        /*let innertext = document.createTextNode("Cell");*/
        /*gridCell.appendChild(innertext);*/
        if (i !== 0) {
            idcounter++;
        }
        gridCell.setAttribute("id", "cell" + idcounter.toString());
        /*gridCell.setAttribute("class", "dynamCell");*/

        document.getElementById("main-grid-contain").appendChild(gridCell);
        /*document.getElementById("cell" + idcounter.toString()).innerHTML = "Cell";*/
        
        
        
        
        
    }
    
     $("#main-grid-contain div")
            .mouseover(function() {
                if (timesPassedOver < 10) {
                    timesPassedOver++;
                    
                    if (randomized) {
                        $(this).css("background-color", `rgb(${applyRandomColor()}, ${applyRandomColor()}, ${applyRandomColor()},                           ${timesPassedOver * 0.1})`);
                        console.log("hit");
                    }
                    else {
                        $(this).css("background-color", `rgb(255,255,255, ${timesPassedOver * 0.1})`);
                        /*$(this).toggleClass("darkcell");*/   
                    }
                }
            })
    
            .mouseout(function() {
                if (!showTrail) {
                    $(this).css("background-color", "#FFFFFF");
                }
            })
    
}
    

