// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://cdn.jsdelivr.net/gh/jasminder/flutter_preloader/flogo.png';
svgImage.style.cssText = `
    max-width: 100px;
    max-height: 100px;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100px;
    transform: translate(-50%, -50%);
    animation: float 2s ease-in-out infinite;
`;
svgImage.style.display = 'none';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Change the background color of the body to black
document.body.style.backgroundColor = 'black';

// Function to hide the overlay and display the SVG
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace the following lines with the actual code that loads your external JS files
    // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);

// Add floating animation with CSS keyframes
const styleElement = document.createElement('style');
styleElement.innerHTML = `
    @keyframes float {
        0% {
            transform: translate(-50%, -50%) translateY(0);
        }
        50% {
            transform: translate(-50%, -50%) translateY(-20px);
        }
        100% {
            transform: translate(-50%, -50%) translateY(0);
        }
    }
`;
document.head.appendChild(styleElement);
