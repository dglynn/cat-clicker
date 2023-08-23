// Cat data
var cats = [
  { name: "Cute Cat 1", image: "cute-cat1.jpg", clicks: 0 },
  { name: "Cute Cat 2", image: "cute-cat2.jpg", clicks: 0 },
  { name: "Cute Cat 3", image: "cute-cat3.jpg", clicks: 0 },
  { name: "Cute Cat 4", image: "cute-cat4.jpg", clicks: 0 },
  { name: "Cute Cat 5", image: "cute-cat5.jpg", clicks: 0 },
];

// Function to initialize cat list
function initializeCatList() {
  var catListItems = document.querySelectorAll(".cat-name");

  catListItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      updateCatDisplay(cats[index]);
    });
  });
}

// Function to update cat display
function updateCatDisplay(cat) {
  var catName = document.querySelector(".cat-name-header");
  var catImage = document.querySelector(".cat-image");
  var catClicks = document.querySelector(".clicks");

  catName.textContent = cat.name;
  catImage.src = cat.image;
  catClicks.textContent = "clicks " + cat.clicks;

  // Add click event listener to cat image
  catImage.addEventListener("click", function () {
    cat.clicks++;
    catClicks.textContent = "clicks " + cat.clicks;
  });
}

// Call the initializeCatList function to set up the initial state
initializeCatList();
