console.log("script loaded");
var line;
var oldLength = 0;
var input = document.getElementById("text");
var out = document.getElementById("output");
input.addEventListener("input", function() {
    line = input.innerHTML;
    out.innerHTML = out.innerHTML.substring(0, out.innerHTML.length-oldLength);
    out.innerHTML += line;
    oldLength = line.length;
  var text = document.getElementById("text").innerHTML;
text.replace(/e/g, "<span style=\"background-color:#42f448\"\">e</span>");
document.getElementById("output").innerHTML = text;
  });


