/*document.querySelector(".dropzone").addEventListener("dragover", function allowDrop(ev) {
    ev.preventDefault();
});

document.addEventListener("dragstart" , function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});	

document.addEventListener("drop", function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    var clone = document.getElementById(data);
    ev.preventDefault();
    ev.target.appendChild(clone);
    clone. addEventListener("click", function r(ev){
    	var returnzone = document.querySelector("#products_list");
    	returnzone.appendChild(ev.target);
	});
	var dropZone = document.getElementById('dropper').innerText;
	console.log(dropZone);
	if(dropZone !== null){
		var drpdElmt = dropZone.split("\n");
	};
	console.log(drpdElmt);
});
*/
