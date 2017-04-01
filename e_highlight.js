while (true) {
  var text = document.getElementById("text").innerHTML;
  text.replace(/e/g, "<span style=\"text-highlight:green\"\">e</span>");
}
