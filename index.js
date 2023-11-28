// Cat Clicker
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
  let catList = document.querySelector(".cat-list"); // Get the cat list element
  // create a dynamic unordered list for the cat list view
  let unorderedList = document.createElement("ul");
  cats.forEach(function (cat, index) {
    // Create the list items to hold the cat list
    let listElements = document.createElement("li");
    // Add the list items ts to unordered list
    unorderedList.append(listElements);
    // Add the attribute: class to the cat list
    listElements.setAttribute("class", "cat-name");
    // Add the cat names to the list
    listElements.append(cat.name);
    listElements.addEventListener("click", function () {
      updateCatDisplay(cats[index]);
    });
  });
  // Display the unorderedList to the dom/view
  catList.appendChild(unorderedList);
  updateCatDisplay(cats[0]);
}

// Call the initializeCatList function to set up the initial state
initializeCatList();
