document.getElementById("text").addEventListener("input", function() {
  var text = document.getElementById("text").innerHTML;
  text = text.replace(/e/g, "<span style=\"background-color:#42f448\"\">e</span>");
  console.log(text);
  document.getElementById("output").innerHTML = text;
});


