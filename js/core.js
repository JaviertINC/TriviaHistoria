$(document).ready(function(){
    $("#myid").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();
        
        // Setting the Div content
        $("#player").text(currentText);
    });
});
$(document).ready(function(){
    $("#mycur").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();
        
        // Setting the Div content
        $("#cursor").text(currentText);
    });
});
