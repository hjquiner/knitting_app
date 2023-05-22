export function calculateAspectRatio() {
    var stitches = parseInt(document.getElementById("stitches").value);
var rows = parseInt(document.getElementById("rows").value);

if (isNaN(stitches) || isNaN(rows)) {
  document.getElementById("result").innerHTML = "Please enter valid numbers for stitches and rows.";
    } else {
      var aspectRatio = stitches / rows;
      document.getElementById("result").innerHTML = "Aspect Ratio: " + aspectRatio.toFixed(2);
    }
}