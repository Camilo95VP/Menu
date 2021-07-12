var ship = document.getElementById('ship').style;

function seguir() {
  ship.top = parseInt(window.event.pageY + 5) + "px";
  ship.left = parseInt(window.event.pageX + 5) + "px";
}