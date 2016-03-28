(function(){
  var list = document.querySelectorAll("[data-image]");

  for (var i=0; i<list.length; i++) {
    var url = list[i].getAttribute('data-image');
    list[i].style.backgroundImage="url('" + url + "')";
  }
})();

