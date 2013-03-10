var url="www.einthusan.com/index.php?lang=tamil";
var htmlStringResponse;
var req = new XMLHttpRequest();
 
req.addEventListener("progress", updateProgress, false);
req.addEventListener("load", transferComplete, false);
req.addEventListener("error", transferFailed, false);
req.addEventListener("abort", transferCanceled, false);

req.onload = reqListener; 
req.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime(), true);
req.send();

function reqListener () {
      alert(this.responseText);
};

function updateProgress(evt) {
 if (evt.lengthComputable) {
 var percentComplete = evt.loaded / evt.total;
 } else {
 // Unable to compute progress information since the total size is unknown
 }
 }
 function transferComplete(evt) {
 alert("The transfer is complete.");
 }
function transferFailed(evt) {
alert("An error occurred while transferring the file.");
 }
         
function transferCanceled(evt) {
 alert("The transfer has been canceled by the user.");
}
