document.addEventListener('DOMContentLoaded', () => { // Ensure the DOM is fully loaded before executing the script.
    const nameInput = document.getElementById('nameInput'); // Get the name input field.
    const submitButton = document.getElementById('submitButton'); // Get the submit button.
    const outputDiv = document.getElementById('outputDiv'); // Get the output div.
    const mouseTracker = document.getElementById('mouseTracker'); // Get the mouse tracker area.
    const coordinatesDiv = document.getElementById('coordinates'); // Get the coordinates display div.

    // Function to handle form submission (called by both click and Enter key)
    function handleSubmit() {
        const name = nameInput.value.trim(); // Get the name from the input field and remove leading/trailing whitespace.

        if (name) { // If a name is entered.
            outputDiv.textContent = `Welcome, ${name}!`; // Display the welcome message.
            outputDiv.style.backgroundColor = 'green'; // Change the background color to green.
            outputDiv.style.color = 'white'; // Change the text color to white for contrast.
        } else { // If no name is entered.
            outputDiv.textContent = 'Error: Please enter a name.'; // Display an error message.
            outputDiv.style.backgroundColor = 'red'; // Change the background color to red.
            outputDiv.style.color = 'white'; // Change the text color to white for contrast.
        }
    }

    // Click Event Listener for the Submit button
    submitButton.addEventListener('click', handleSubmit); // Attach a click event listener to the submit button.

    // Keyboard Event Listener for the Input field
    nameInput.addEventListener('keypress', (event) => { // Attach a keypress event listener to the input field.
        if (event.key === 'Enter') { // If the Enter key is pressed.
            event.preventDefault(); // Prevent the default form submission (page reload).
            handleSubmit(); // Trigger the submit function.
        }
    });

    // Mouse Event Listener for the Mouse Tracker area
    mouseTracker.addEventListener('mousemove', (event) => { // Attach a mousemove event listener to the mouse tracker area.
        const rect = mouseTracker.getBoundingClientRect(); // Get the bounding box of the mouse tracker element.
        const x = event.clientX - rect.left; // Calculate X coordinate relative to the element.
        const y = event.clientY - rect.top; // Calculate Y coordinate relative to the element.
        coordinatesDiv.textContent = `Mouse Coordinates: X: ${x.toFixed(0)}, Y: ${y.toFixed(0)}`; // Display coordinates (rounded to 0 decimal places).
    });
});
