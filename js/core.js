var qs =
document.getElementById("identificador_js").src.match(/\w+=\w+/g);
 
var _GET= {};
 
var t,i = qs.length;
while (i--) {
 
     t = qs[i].split("=");
 
     _GET[t[0]] = t[1];
 
    eval('var '+t[0]+'="'+t[1]+'";');
}
alert(_GET['nombre'] + " " + nombre);
