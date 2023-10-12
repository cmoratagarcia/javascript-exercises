const container = document.getElementById("container");
/* a <p> with red text that says “Hey I’m red!”*/
const redPara = document.createElement("p");
redPara.innerText = "Hey I’m red!";
redPara.style.color = "red";
container.appendChild(redPara);

/* an <h3> with blue text that says “I’m a blue h3!”*/
const blueHeader = document.createElement("h3");
blueHeader.innerText = "I'm a blue h3!";
blueHeader.style.color = "blue";
container.appendChild(blueHeader);

/*a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. */
const divBox = document.createElement("div");
divBox.setAttribute("style", "background: pink", "border: 1px solid black");
const divHeader = document.createElement("h1");
divHeader.innerText = "I’m in a div";
const divPara = document.createElement("p");
divPara.innerText = "ME TOO!";
divBox.append(divHeader, divPara);
container.appendChild(divBox);
