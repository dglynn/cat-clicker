// MVC layout
// controller speaks to the model to get data
// controller speaks to the view to decide what to show to the client(api/webpage/what you see in the cli output)
// Write a new cmd line version of the app, which is a new view

// Model
// Cat data
const cats = [
  { name: "Cute Cat 1", image: "cute-cat1.jpg", clicks: 0 },
  { name: "Cute Cat 2", image: "cute-cat2.jpg", clicks: 0 },
  { name: "Cute Cat 3", image: "cute-cat3.jpg", clicks: 0 },
  { name: "Cute Cat 4", image: "cute-cat4.jpg", clicks: 0 },
  { name: "Cute Cat 5", image: "cute-cat5.jpg", clicks: 0 },
];

// View
let catName = document.querySelector(".cat-name-header"); // Get the cat name element
let catImage = document.querySelector(".cat-image"); // Get the cat image element
let catClicks = document.querySelector(".clicks"); // Get the cat clicks element
// Function to update cat display
function updateCatDisplay(cat) {
  catName.textContent = cat.name;
  catImage.src = cat.image;
  catClicks.textContent = "clicks " + cat.clicks;

  // Add click event listener to the cat image
  catImage.onclick = function () {
    cat.clicks++;
    catClicks.textContent = "clicks " + cat.clicks;
  };
}

// Controller
// Function to initialize cat list
function initializeCatList() {
  //let catListItems = cats //document.querySelectorAll(".cat-name");
  let catList = document.querySelector(".cat-list"); // Get the cat list element
  let unorderedList = document.createElement("ul");
  //<li class="cat-name">Cute Cat 2</li>;
  // add the class-name and the text contents to the li
  // after the loop put the ul into the dom need to have an id/class so it know where it goes
  cats.forEach(function (cat, index) {
    let listElements = document.createElement("li");
    unorderedList.append(listElements);
    listElements.append("");
    listElements.addEventListener("click", function () {
      updateCatDisplay(cats[index]);
    });
  });
  // add the ul to the dom

  updateCatDisplay(cats[0]);
}

// Call the initializeCatList function to set up the initial state
initializeCatList();
