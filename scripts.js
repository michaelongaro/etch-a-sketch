let randomized = false;
let showTrail = true;
let timesPassedOver = 0;
let cellArr;
let newSize;
let currentSelectedID;
let isntInitialGrid = false;
let updatedCellWidth = 240;
let notValidWidthInput = false;


window.onload = function() { 
    startingGrid(4);
    newSize = 16;
    updatedCellWidth = 960 / 4;
    document.getElementById("main-grid-contain").style.gridTemplateColumns = `repeat(4, ${updatedCellWidth.toString()}px)`;
    console.log(`${updatedCellWidth.toString()}px`);     
    cellArr = new Array(newSize).fill(0);
    
    /* going to need to figure out how to select ALL divs (aka use #main-grid-contain > div) here to 
        scale heights as well. maybe need jquery here too? */
    /* need to make this fit 960 by 960 px no matter what */
    
    $("#main-grid-contain").children().css("height", `${(updatedCellWidth).toString()}px`);
    console.log(`${(updatedCellWidth).toString()}px`);
    
    
    $("#change-grid-size") 
        .click(function() { 
            resetGrid();
            notValidWidthInput = false;
            while (!notValidWidthInput) {
                newSize = parseInt(prompt("Please enter desired number of cells per row", "4"));
                if (0 >= newSize || 100 < newSize) {
                    alert("Please input a valid number (between 0-100)");
                }
                else {
                    notValidWidthInput = true;
                }
            }
            isntInitialGrid = true;
            updatedCellWidth = 960 / newSize;
            startingGrid(newSize);
            cellArr = new Array(newSize ** 2).fill(0);
            document.getElementById("main-grid-contain").style.gridTemplateColumns = `repeat(${newSize} , ${(updatedCellWidth).toString()}px)`;
            $("#main-grid-contain").children().css("height", `${(updatedCellWidth).toString()}px`);
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
        cellArr = new Array(newSize ** 2).fill(0);
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
        cellArr = new Array(newSize ** 2).fill(0);
    })
    
    $("#main-grid-contain div")
    
            .mouseover(function() {
                    currentSelectedID = $(this).attr("id").slice(4);
                    currentSelectedID = parseInt(currentSelectedID) - 1;
                    if (cellArr[currentSelectedID] < 10) {
                        cellArr[currentSelectedID]++;
                        console.log(cellArr);
                        console.log(currentSelectedID);
                    }
                    else {

                    }
                    
                    if (randomized) {
                        $(this).css("background-color", `rgba(${applyRandomColor()}, ${applyRandomColor()}, ${applyRandomColor()}, ${cellArr[currentSelectedID] * 0.1})`);
                        console.log("hit");
                    }
                    else {
                        $(this).css("background-color", `rgba(0, 0, 0, ${cellArr[currentSelectedID] * 0.1})`);
                        /*$(this).toggleClass("darkcell");*/   
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
        if (i !== 0) {
            idcounter++;
        }
        gridCell.setAttribute("id", "cell" + idcounter.toString());

        document.getElementById("main-grid-contain").appendChild(gridCell);
    }
    
    if (isntInitialGrid) {
    
         $("#main-grid-contain div")
                .mouseover(function() {
                        let currentSelectedID = $(this).attr("id").slice(4);
                        currentSelectedID = parseInt(currentSelectedID) - 1;
                        if (cellArr[currentSelectedID] < 10) {
                            cellArr[currentSelectedID]++;
                        }
                        else {

                        }

                        if (randomized) {
                            $(this).css("background-color", `rgba(${applyRandomColor()}, ${applyRandomColor()}, ${applyRandomColor()}, ${cellArr[currentSelectedID] * 0.1})`);
                            console.log("hit");
                        }
                        else {
                            $(this).css("background-color", `rgba(0, 0, 0, ${cellArr[currentSelectedID] * 0.1})`);
                            /*$(this).toggleClass("darkcell");*/   
                        }

                })

                .mouseout(function() {
                    if (!showTrail) {
                        $(this).css("background-color", "#FFFFFF");
                    }
                })
    }
}
    