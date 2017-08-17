window.onload = function() { 
    var elm = document.getElementById("username"),
		gethead = document.getElementById("myid"),
        head = document.getElementById("face"),
        complete = document.getElementById("body"),
        test = document.getElementById("test");
		

    elm.onkeyup = function(event) {
	document.getElementById("player").innerHTML = '/give @p minecraft:skull 1 3 {SkullOwner:"'+document.getElementById('myid').value +'"}';
    if (elm.value == null || elm.value == "") {
            document.getElementById("player").innerHTML = "Ingresa un Nombre!";
    } else {
     head.src = "https://crafatar.com/avatars/" + document.getElementById('myid').value + "?default=steve";
      document.getElementById("test").innerHTML = elm.value;
    } 
    if (elm.value == null || elm.value == "") {
      complete.src = "https://crafatar.com/renders/body/steve?helm&scale=4";
            document.getElementById("test").innerHTML = "Ingresa un Nick";
    } else {
     complete.src = "https://crafatar.com/renders/body/" + document.getElementById('myid').value + "?helm&scale=4";
      document.getElementById("test").innerHTML = elm.value;
    }
}
}
