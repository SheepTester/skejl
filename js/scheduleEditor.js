(function() {
  var editordiv=document.querySelector('#scheduleEditor'),
  grid=document.createElementNS('http://www.w3.org/2000/svg',"svg");
  grid.setAttributeNS(null,'height','300');
  var onresize=e=>{
    grid.setAttributeNS(null,'width',window.innerWidth-40);
  };
  onresize();
  window.addEventListener("resize",onresize,false);
  editordiv.appendChild(grid);
}());
