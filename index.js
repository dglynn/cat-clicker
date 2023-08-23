// Cat data
const cats = [
  { name: "Cute Cat 1", image: "cute-cat1.jpg", clicks: 0 },
  { name: "Cute Cat 2", image: "cute-cat2.jpg", clicks: 0 },
  { name: "Cute Cat 3", image: "cute-cat3.jpg", clicks: 0 },
  { name: "Cute Cat 4", image: "cute-cat4.jpg", clicks: 0 },
  { name: "Cute Cat 5", image: "cute-cat5.jpg", clicks: 0 },
];

let catName = document.querySelector(".cat-name-header"); // Get the cat name element
let catImage = document.querySelector(".cat-image"); // Get the cat image element
let catClicks = document.querySelector(".clicks"); // Get the cat clicks element
let catImageClickHandler = null; // Track the click event handler

// Function to initialize cat list
function initializeCatList() {
  let catListItems = document.querySelectorAll(".cat-name");

  catListItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      updateCatDisplay(cats[index]);
    });
  });
  updateCatDisplay(cats[0]);
}

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

// Call the initializeCatList function to set up the initial state
initializeCatList();
