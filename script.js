$( document ).ready( readyNow );

function readyNow(){
    $( '#createButton' ).on( 'click', createButtonClick );
    $( '#createdStructures' ).on( 'click', '#swapColor', changeColor)
    $( '#createdStructures' ).on( 'click', '#deleteButton', deleteCreatedStructure)
}

let amountOfClicks = 0

function createButtonClick(){
    //increment amountOfClicks
    amountOfClicks ++;
    // append new structure
    $( '#createdStructures' ).append( `
    <div class="createdStructure">
        <p id=amountOfClicksText>` + amountOfClicks + `</p>
        <button class=createdButton id=swapColor>Swap</button><button class=createdButton id=deleteButton>Delete</button>
    </div>`)
}

function changeColor(){
    //toggle color of structure from red to yellow and vise versa
    this.parentElement.classList.toggle( "createdStructure2")
}

function deleteCreatedStructure(){
    //delete the selected structure
    this.parentElement.remove(); 
}