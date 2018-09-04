$( document ).ready( readyNow );

function readyNow(){
    $( '#createButton' ).on( 'click', createButtonClick );
    $( '#createdStructures' ).on( 'click', '#swapColor', changeColor)
    $( '#createdStructures' ).on( 'click', '#deleteButton', deleteCreatedStructure)
}

let amountOfClicks = 0

function createButtonClick(){
    console.log( 'boom' );
    amountOfClicks ++;
    $( '#createdStructures' ).append( `
    <div class="createdStructure">
        <p id=numberTitle>` + amountOfClicks + `</p>
        <button class=createdButton id=swapColor>Swap Color</button><button class=createdButton id=deleteButton>Delete</button>
    </div>`)
}

function changeColor(){
    console.log( this );
    this.parentElement.classList.toggle( "createdStructure2")
}

function deleteCreatedStructure(){
    console.log( this.parentElement );
    this.parentElement.remove(); 
}