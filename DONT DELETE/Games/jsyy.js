// script.js
let score = 0;
const scoreElement = document.getElementById('score');
const itemContainer = document.getElementById('item-container');

// List of item images (replace with actual images or different items)
const itemImages = [
  'https://via.placeholder.com/50x50/FF6F61/fff?text=Item1', // Example placeholder
  'https://via.placeholder.com/50x50/61FF61/fff?text=Item2',
  'https://via.placeholder.com/50x50/61C2FF/fff?text=Item3'
];

// Function to create a random falling item
function createFallingItem() {
  const item = document.createElement('div');
  const randomImage = itemImages[Math.floor(Math.random() * itemImages.length)];

  // Set item style
  item.classList.add('item');
  item.style.left = `${Math.random() * (window.innerWidth - 50)}px`;  // Random horizontal position (screen width minus item width)
  item.style.top = `-60px`;  // Start above the game area

  // Add image to the item
  const img = document.createElement('img');
  img.src = randomImage;
  item.appendChild(img);

  // Append item to the item container
  itemContainer.appendChild(item);

  // Animate the item falling
  let fallInterval = setInterval(() => {
    const currentTop = parseFloat(item.style.top);
    if (currentTop >= window.innerHeight) { // If the item reaches the bottom
      clearInterval(fallInterval); // Stop falling
      item.remove(); // Remove item after it reaches the bottom
    } else {
      item.style.top = `${currentTop + 3}px`; // Move item downwards
    }
  }, 10);

  // Add click event to collect item
  item.addEventListener('click', () => {
    score += 10;  // Increase score when clicked
    scoreElement.textContent = score;
    item.remove(); // Remove item when clicked
  });
}

// Generate items at intervals
setInterval(createFallingItem, 1000);  // Create an item every 1 second
