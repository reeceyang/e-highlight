console.log("script loaded");
while (true) {
  var text = document.getElementById("text").innerHTML;
  text.replace(/e/g, "<span style=\"text-highlight:green\"\">e</span>");
  document.getElementById("text").innerHTML = text;
}
