// $(target).action

const result = $("header h1").text();
$("header h1").html("SUPER TITLE");
$("header h1").css("color", "red");

console.log(result);

$("button").click((event) => console.log(event.target));

const $bob = $("<h3>").text("I LOVE H3s");

$("section:first-of-type").append($bob);
const $newSection = $("<section>").append($bob);

$("main").append($newSection);

$("section").click((event) => {
	$(event.target).toggleClass("poulet");
});

// 200 OK / 300 Redirect / 400 You fed up / 500 served fed up


$.ajax("/url")

_.deep(...)