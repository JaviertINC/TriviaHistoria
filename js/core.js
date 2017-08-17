$(document).ready(function(){
    $("#myid").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();
        
        // Setting the Div content
        $("#player").text(currentText);
    });
});
