function confirmNavigation(wrestlerName) {
    const confirmation = window.confirm(`You are about to be taken to a video for ${wrestlerName}. Are you ready?`);

    if (confirmation) {
        // User clicked OK, navigate to the link
        window.location.href = event.currentTarget.href;
    } else {
        // User clicked Cancel, do nothing
        event.preventDefault();
    }
}

function changeGlowColor() {
    const glowColorInput = document.getElementById('glowColorInput').value.trim();
    document.documentElement.style.setProperty('--glow-color', glowColorInput);
    }

function showMessage() {
    const dynamicContent = document.querySelector('.dynamic-content');
    dynamicContent.innerHTML =
        '<div class="message-container">' +
        '<h4>Favorite Wrestlers</h4>' +
        '<p>"Welcome to my webpage dedicated to my favorite wrestlers. These extraordinary athletes possess not only amazing athletic abilities but also a unique talent for storytelling. Whether delivering flamboyant promos or heartfelt redemption stories, they captivate audiences like skilled actors. Beyond their in-ring prowess, these wrestlers master the art of character development. From carefully chosen theme music to thoughtfully curated attire, every detail reflects the essence of their persona. Join me in exploring the world of these exceptional individuals who seamlessly blend athleticism with character portrayal in the thrilling realm of professional wrestling."</p>' +
        '</div>';

    // Apply the glow color to the message container
    const glowColor = getComputedStyle(document.documentElement).getPropertyValue('--glow-color');
    dynamicContent.querySelector('.message-container').style.boxShadow = `0 0 20px 10px ${glowColor}`;
}

document.getElementById('dynamicForm').addEventListener('change', function () {
    const showMessageCheckbox = document.getElementById('showMessage');

    if (showMessageCheckbox.checked) {
        showMessage();
    } else {
        const dynamicContent = document.querySelector('.dynamic-content');
        dynamicContent.innerHTML = ''; // Clear the message if the checkbox is unchecked
    }
});

// Additional function for user input validation
function validateGlowColorInput() {
    const glowColorInput = document.getElementById('glowColorInput').value.trim().toLowerCase();

    // List of common color names
    const validColorNames = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown'];

    // Check if the input is a valid color name
    if (validColorNames.includes(glowColorInput)) {
        changeGlowColor(); // Apply the glow color if it's valid
    } else {
        alert("Please enter a valid color name.");
        // You might want to clear the input or handle the error in another way.
    }
}


// Attach the validation function to the button click event
document.getElementById('glowColorInput').addEventListener('change', validateGlowColorInput);

// Function to display images based on the rating
function displayImages(starRating) {
    const imageContainer = document.getElementById("imageContainer");
    const imageSource = "https://i0.wp.com/wwechampionshipbelt.com/wp-content/uploads/2022/04/roman-reign-belt-2022.jpeg?fit=1280%2C609&ssl=1"; // Replace with your actual image URL

    imageContainer.innerHTML = ""; // Clear previous images
    for (let i = 0; i < starRating; i++) {
        let img = document.createElement("img");
        img.src = imageSource;
        img.alt = "Championship Belt Image";
        img.style.maxWidth = "100px"; // Adjust as needed
        imageContainer.appendChild(img);
    }

    // Display the number of images
    let numImagesMessage = document.createElement("p");
    numImagesMessage.textContent = `You gave me ${starRating} championship belts`;
    imageContainer.appendChild(numImagesMessage);
}

// Function to handle the rating submission
function submitRating() {
    const starRating = parseInt(document.getElementById("starRatingInput").value, 10);

    if (isNaN(starRating) || starRating < 1 || starRating > 5) {
        alert("Invalid star rating. Please enter a number between 1 and 5.");
    } else {
        displayImages(starRating);
    }
}

// Call the changeGlowColor function on page load or as needed
changeGlowColor();
