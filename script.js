function wip() {
  alert("Deze pagina is nog niet beschikbaar.");
}

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

function nw() {
  window.open("Belangrijke Brief.pdf", "_blank", "width=100%", "height=100%");
}

function bk(){
  var audio = new Audio('bergkamp.mp3');
  if (audio.paused != true){
    audio.pause();
  } else {
    audio.play();
  }

}
