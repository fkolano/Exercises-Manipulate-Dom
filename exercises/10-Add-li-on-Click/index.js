let button = document.querySelector("#myList");
button.addEventListener("click", function() {
	//your code here
	//var elem = document.getElementById("#superDuperButton");

	

});

var listenerFunction = function(){
	alert("First click");
	document.getElementById("superDuperButton").removeEventListener("click",listenerFunction);
	
	let li = document.createElement("#myList");
	li.innerHTML = "<li>Hello World</>";
	document.body.appendChild(li);
	
}
function inicialize(){
	document.getElementById("superDuperButton").addEventListener("click",listenerFunction);
}