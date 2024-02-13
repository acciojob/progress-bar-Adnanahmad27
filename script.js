//your JS code here. If required.
const next = document.getElementById("next");
const prev = document.getElementById("prev");
// const circles = document.getElementsByClassName("circle");
// const connections = document.getElementsByClassName("connection");

let currCircle = 1;
function nevigation( dir) {
	let id = `circle-${currCircle}`
	let currNode = document.getElementById(id);
	if(dir === "next" && currNode.nextElementSibling){
		currNode.nextElementSibling.classList.add("active");
		currNode.nextElementSibling.nextElementSibling.classList.add("active");
		currCircle++;
	}else if(dir === "prev" && currNode.previousElementSibling){
		currNode.classList.remove("active");
		currNode.previousElementSibling.classList.remove("active");
		currCircle--;
	}
	currCircle === 5 ? (next.disabled = true) : (next.disabled = false);
	currCircle === 1 ? (prev.disabled = true): (prev.disabled = false);
} 
next.addEventListener("click" , () => {
	nevigation("next");
});
prev.addEventListener("click" , () => {
	nevigation("prev");
});