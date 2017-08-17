var player="JaviertINC";

window.onload = function() { 
    var elm = document.getElementById("username"),
		gethead = document.getElementById("myid"),
        head = document.getElementById("face"),
        complete = document.getElementById("body"),
        test = document.getElementById("player");
		

    elm.onkeyup = function(event) {
	document.getElementById("player").innerHTML = document.getElementById('username').value +' '+ window.location.href;
    if (elm.value == null || elm.value == "") {
            document.getElementById("player").innerHTML = "Ingresa un Nombre!";
    } else {
     head.src = "https://crafatar.com/avatars/" + document.getElementById('myid').value + "?default=steve";
      document.getElementById("player").innerHTML = elm.value;
    } 
    if (elm.value == null || elm.value == "") {
      complete.src = "https://crafatar.com/renders/body/steve?helm&scale=4";
            document.getElementById("player").innerHTML = "Ingresa un Nick";
    } else {
     complete.src = "https://crafatar.com/renders/body/" + document.getElementById('myid').value + "?helm&scale=4";
      document.getElementById("player").innerHTML = elm.value;
    }
}
}
