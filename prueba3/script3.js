<script>
<input id="id1" type="number" min="5">
<button onclick="myFunction()">OK</button>

<p>"Si el numero es menor de 5 digitos aparecerá un mensaje de error"</p>

<p id="demo"></p>

function myFunction() {
  let text;
  if (document.getElementById("id1").validity.rangeUnderflow) {
    text = "muy corto";
  } else {
    text = "ok";
  } 
  document.getElementById("demo").innerHTML = text;
}
</script>
