/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").innerText =
  'I used the getElementById("node1") method to access this';
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].innerText =
  'I used the getElementsByClassName("node2") to access this';
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3Nodes = document.getElementsByTagName("h3");
for (let node of h3Nodes) {
  node.innerText =
    'I used the getElementByTageName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
const p = document.createElement("p");
p.innerText = "I am a p element";
// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.getElementById("parent");
parent.appendChild(p);
// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
const small = document.createElement("small");
small.innerText = "I am small";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(small, p);
// BONUS: Add a link href to the <a>

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newP = document.createElement("p");
newP.innerText = "New Child Node";
// TODO: Remove the "New Child Node"
const exercise3 = document.getElementById("exercise3");
exercise3.replaceChild(newP, document.getElementById("N1"));
/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
let box = document.getElementById("box");
let container = document.getElementById("container");
let posX = 1;

let moveInterval = setInterval(moveBox, 100);

function moveBox() {
  console.log(posX);
  if (posX <= container.offsetWidth - box.offsetWidth) {
    box.style.left = posX + "px";
    posX++;
  } else {
    clearInterval(moveInterval);
  }
}
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
function show() {
  let modal = document.createElement("div");
  let modalP = document.createElement("p");
  let ModalBtn = document.createElement("button");

  modalP.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  modal.appendChild(modalP);
  document.body.appendChild(modal);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", show);
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
