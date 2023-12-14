// document.getElementById("fetchUserBtn").addEventListener("click", fetchUsers);

// function fetchUsers(){
//     fetch("https://reqres.in/api/users")
//     .then(response => response.json())
//     .then(data => displayUsers(data.data))
//     .catch(error => console.error('Error fetching users:', error));
// }
// function displayUsers(users) {
//     const userContainer = document.getElementById("userContainer");
//     userContainer.innerHTML = "";

//     userContainer.forEach(users => {
//         const userCard = document.createElement("div")
//         userCard.classList.add("userCard")

//         const userAvatar = document.createElement("img")
//         userAvatar.src = user.avatar
//         userAvatar.alt = "User Avatar";
//         userAvatar.classList.add("userAvatar")

//         const userName = document.createElement("p")
//         userName.textContent = `Name: ${user.first_name} ${user.last_name}`;

//         const userEmail = document.createElement("p")
//         userEmail.textContent = `Email: ${user.email}`

//         userCard.appendChild(userAvatar)
//         userCard.appendChild(userName)
//         userCard.appendChild(userEmail)

//         userContainer.appendChild(userCard)

//     })
// }
// Add an event listener to the button with the id 'fetchUsersBtn'
document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);

// Define the fetchUsers function that will be called when the button is clicked
function fetchUsers() {
    // Use the fetch API to make a GET request to the Reqres API endpoint for users
    fetch('https://reqres.in/api/users')
        // Parse the response as JSON
        .then(response => response.json())
        // Once the JSON is parsed, call the displayUsers function with the user data
        .then(data => displayUsers(data.data))
        // Handle any errors that may occur during the fetch operation
        .catch(error => console.error('Error fetching users:', error));
}

// Define the displayUsers function that takes an array of user data as an argument
function displayUsers(users) {
    // Get the element with the id 'userContainer'
    const userContainer = document.getElementById('userContainer');

    // Clear any previous user data in the userContainer
    userContainer.innerHTML = '';

    // Loop through each user in the array
    users.forEach(user => {
        // Create a new div element for each user and add the 'userCard' class
        const userCard = document.createElement('div');
        userCard.classList.add('userCard');

        // Create an img element for the user's avatar and set its source and alt attributes
        const userAvatar = document.createElement('img');
        userAvatar.src = user.avatar;
        userAvatar.alt = 'User Avatar';
        userAvatar.classList.add('userAvatar');

        // Create a paragraph element for the user's name and set its text content
        const userName = document.createElement('p');
        userName.textContent = `Name: ${user.first_name} ${user.last_name}`;

        // Create a paragraph element for the user's email and set its text content
        const userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${user.email}`;

        // Append the userAvatar, userName, and userEmail elements to the userCard
        userCard.appendChild(userAvatar);
        userCard.appendChild(userName);
        userCard.appendChild(userEmail);

        // Append the userCard to the userContainer
        userContainer.appendChild(userCard);
    });
}
