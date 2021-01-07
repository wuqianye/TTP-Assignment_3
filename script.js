//Q1: Select the section with an id of container without using querySelector.
const container = document.getElementById("container");
console.log(container);

//Q2: Select the section with an id of container using querySelector.
console.log(document.querySelector("#container"));

//Q3: Select all of the list items with a class of "second".
console.log(document.querySelectorAll(".second"));

//Q4: Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelectorAll("ol>.third"));

//Q5: Give the section with an id of container the text "Hello!".
container.append("Hello!");

//Q6: Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(footer.classList);

//Q7: Remove the class main on the div with a class of footer.
footer.classList.remove("main");
console.log(footer.classList);

//Q8: Create a new li element.
const li = document.createElement("li");

//Q9: Give the li the text "four".
li.innerText = "four";

//Q10: Append the li to the ul element.
document.querySelector("ul").append(li);

//Q11: Loop over all of the lis inside the ol tag and give them a background color of "green".
const lis = document.querySelectorAll("ol>li");
lis.forEach(e => {
    e.style.background = "green";
});

//Q12: Remove the div with a class of footer.
footer.remove();
