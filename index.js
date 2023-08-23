// Cat data
var cats = [
  { name: "Cute Cat 1", image: "cute-cat1.jpg", clicks: 0 },
  { name: "Cute Cat 2", image: "cute-cat2.jpg", clicks: 0 },
  { name: "Cute Cat 3", image: "cute-cat3.jpg", clicks: 0 },
  { name: "Cute Cat 4", image: "cute-cat4.jpg", clicks: 0 },
  { name: "Cute Cat 5", image: "cute-cat5.jpg", clicks: 0 },
];

let selectedCatIndex = null; // Track the index of the currently selected cat
let catImage = document.querySelector(".cat-image"); // Get the cat image element
let catClicks = document.querySelector(".clicks"); // Get the cat clicks element
let catImageClickHandler = null; // Track the click event handler

// Function to initialize cat list
function initializeCatList() {
  let catListItems = document.querySelectorAll(".cat-name");

  catListItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      selectedCatIndex = index; // Update the selected cat index
      updateCatDisplay();
    });
  });
}

// Function to update cat display
function updateCatDisplay() {
  let catName = document.querySelector(".cat-name-header");

  if (selectedCatIndex !== null) {
    let cat = cats[selectedCatIndex];

    catName.textContent = cat.name;
    catImage.src = cat.image;
    catClicks.textContent = "clicks " + cat.clicks;

    // Remove click event listener from the previous cat image
    if (catImageClickHandler) {
      catImage.removeEventListener("click", catImageClickHandler);
    }

    // Add click event listener to the cat image
    catImageClickHandler = function () {
      cat.clicks++;
      catClicks.textContent = "clicks " + cat.clicks;
    };
    catImage.addEventListener("click", catImageClickHandler);
  } else {
    catName.textContent = "";
    catImage.src = "";
    catClicks.textContent = "";
  }
}

// Call the initializeCatList function to set up the initial state
initializeCatList();
