function ResetColors() {

    var green = document.getElementsByClassName("table-green");
    for(var i=0; i<green.length; i++) {
    green[i].style.backgroundColor = "white";
    }
    var red = document.getElementsByClassName("table-red");
    for(var i=0; i<red.length; i++) {
    red[i].style.backgroundColor = "white";
    }   
    var orange = document.getElementsByClassName("table-orange");
    for(var i=0; i<orange.length; i++) {
    orange[i].style.backgroundColor = "white";
    }
    
}