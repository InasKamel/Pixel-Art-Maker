// gridHeight, gridWidth, color variables to store the user's inputs
let gridHeight, gridWidth, color;

// this makeGrid() function will attach a number (equal to grid height) of <tr>s to the <table id='pixelCanvas'> element
// and a number (equal to grid width) of <td>s will be attached inside each <tr> just created.
function makeGrid() {
    if ( Number( $( '#inputHeight' ).val() ) === gridHeight && Number( $( '#inputWeight' ).val() ) === gridWidth ) {
        $( '#pixelCanvas td' ).css( 'background-color', '#fff' );
    } else {
        gridHeight = Number( $( '#inputHeight' ).val() );
        gridWidth = Number( $( '#inputWeight' ).val() );
        $( '#pixelCanvas' ).children().remove();
        for (let i = 0; i < gridHeight; i++) {
            $( '#pixelCanvas' ).append( '<tr></tr>' );
            for (let j = 0; j < gridWidth; j++) {
                $( '#pixelCanvas' ).children().last().append( '<td></td>' );
            }
        }
    }

    // set up a 'click' event listener to all <td>s to color the clicked <td>
    $( '#pixelCanvas' ).click( function( e ) {
        color = $( '#colorPicker' ).val();
        $( e.target ).css( 'background-color', color );
    } );
}

$( '#sizePicker' ).submit( function( e ) {
    e.preventDefault();
    makeGrid();
} );