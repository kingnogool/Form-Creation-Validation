// 1. Initialize the Async Function:
// Begin by defining an asynchronous function named fetchUserData.
// This function will contain all your code for fetching and displaying the data.
async function fetchUserData() {
    // 2. Define the API URL:
    // Inside fetchUserData, declare a constant apiUrl and assign it the
    // string value 'https://jsonplaceholder.typicode.com/users'.
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the Data Container Element:
    // Select the HTML element where the API data will be displayed by using
    // document.getElementById. Look for an element with the ID 'api-data'
    // and store this reference in a constant named dataContainer.
    const dataContainer = document.getElementById('api-data');

    // 4. Fetch Data Using try-catch:
    // Employ a try-catch block to handle the fetching process and potential errors.
    try {
        // In the try block, use the await keyword with the fetch function
        // to asynchronously get data from apiUrl. Store the response in a constant named response.
        const response = await fetch(apiUrl);

        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Then, convert the response to JSON using await response.json()
        // and store this data in a constant named users.
        const users = await response.json();

        // 5. Clear the Loading Message:
        // Before appending new content to dataContainer, clear its existing content
        // (the “Loading user data…” message) by setting dataContainer.innerHTML = ''.
        dataContainer.innerHTML = '';

        // 6. Create and Append User List:
        // Create a <ul> element and store it in a constant named userList.
        const userList = document.createElement('ul');

        // Loop through the users array with forEach, and for each user, do the following:
        users.forEach(user => {
            // Create a <li> element.
            const listItem = document.createElement('li');
            // Set the text content of the <li> to the user’s name.
            listItem.textContent = user.name;
            // Append the <li> to userList.
            userList.appendChild(listItem);
        });

        // After the loop, append userList to dataContainer.
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error Handling:
        // In the catch block, clear the existing content of dataContainer
        // (similar to step 5) and set its text content to 'Failed to load user data.',
        // indicating an error occurred during data fetching.
        console.error("Error fetching user data:", error); // Log the actual error for debugging
        dataContainer.innerHTML = ''; // Clear loading or previous content
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded:
// Outside fetchUserData, add an event listener to document for the DOMContentLoaded event.
// Set the callback function to invoke fetchUserData. This ensures your data fetching
// logic runs once the HTML document has fully loaded.
document.addEventListener('DOMContentLoaded', fetchUserData);