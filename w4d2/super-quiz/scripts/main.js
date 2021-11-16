const result = document
	.getElementsByTagName("header")[0]
	.getElementsByTagName("h1");

result[0].innerText = "Super text!";

// Array.from(NodeList) when playing with lists

// for(const button of document.querySelectorAll('button')){
//   button.remove()
//   }

document.querySelector("#page-title").innerText = "Wiggle wiggle";

const newElement = document.createElement("h3");
newElement.innerText = "I AM H3";
newElement.id = "heidi";
document.querySelector("section.question").appendChild(newElement);

console.log(result);

const handleAnswerButtons = (event) => {
	const idOfButton = event.target.id;
	const image = document.createElement("img");

	if (idOfButton === "yes") {
		image.src = "/images/yesbutno1.webp";
	}
	if (idOfButton === "no") {
		image.src = "/images/yesbutno2.gif";
	}
	if (idOfButton === "depends") {
		image.src = "/images/genius.webp";
	}
	for (const button of document.querySelectorAll("button")) {
		button.remove();
	}
	document.querySelector("section.answer").appendChild(image);
};

for (const button of document.querySelectorAll("button")) {
	button.addEventListener("dblclick", handleAnswerButtons);
	button.addEventListener("click", (event) => console.log(event));
}
