
window.onload = function() { 
    startingGrid(4);
    document.getElementById("main-grid-contain").style.gridTemplateColumns = "repeat(4, 100px)";
    let randomized = false;
    
    
    $("#change-grid-size") 
        .click(function() {
            let newSize = parseInt(prompt("Please enter desired number of cells"));
            startingGrid(newSize);
            document.getElementById("main-grid-contain").style.gridTemplateColumns = `repeat(${newSize} , 100px)`;
            /* have to properly decrease size of grid if # of rows/cols is < current vals */
            /* aka need to remove (?) the current ones or just add/subtract what is needed to current grid */
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
    });
    
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
                if (randomized) {
                    $(this).css("background-color", `rgb(${applyRandomColor()}, ${applyRandomColor()}, ${applyRandomColor()})`);
                    console.log("hit");
                }
                else {
                    $(this).css("background-color", "");
                    $(this).toggleClass("darkcell");   
                }
            })
    
            .mouseout(function() {
                if (randomized) {
                    $(this).css("background-color", "#FFFFFF");
                }
                else {
                        $(this).css("background-color", "");
                        $(this).toggleClass("darkcell");
                }
            
            })
        
}

function applyRandomColor() {
    return Math.floor(Math.random(0, 1) * 255);
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
    
}
    

