var changed = false;

function change() {
    var body = document.getElementsByTagName("body")[0];
    var roaming = document.getElementById("roaming");
    var artist1 = document.getElementById("artist1");
    
     if (changed){
        body.style.background = "#7756eb";
        artist1.style.opacity = "0";
        setTimeout(function() {artist1.style.display = "none"; roaming.style.display = "flex";}, 500);
        setTimeout(function() {roaming.style.opacity = "1";}, 1000);
        changed = false;
    } else {
//        body.style.background = "#605f62";
        body.style.background = "#5f528d";
        roaming.style.opacity = "0";
        artist1.style.display = "block";
        setTimeout(function() {artist1.style.opacity = "1"}, 500);
        setTimeout(function() {roaming.style.display = "none";}, 750);
        changed = true;
    }
 
}