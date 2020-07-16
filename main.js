var icon = document.getElementById("mobil_menu");
var jsMenu = document.getElementById("idMenu");


icon.addEventListener("click", cntrol)
function cntrol(){
if(jsMenu.className === "menu"){
       jsMenu.className += " adaptive";
      }else{
        jsMenu.className = "menu";
    }
}
