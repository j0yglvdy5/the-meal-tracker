document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to search buttons
    const searchButtons = document.querySelectorAll('.search-button');
    searchButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category;
            const keyword = prompt(`Enter keyword to search ${category} meals:`);
            if (keyword !== null && keyword.trim() !== '') {
                filterMealsByCategory(category, keyword.trim());
            }
        });
    });
});


function filterMealsByCategory(category, keyword) {
    // Get the table and table body for the specified category
    const tableId = `${category}-table`;
    const tableBody = document.querySelector(`#${tableId} tbody`);
    // Get all rows in the table body
    const rows = tableBody.querySelectorAll('tr');
    // Loop through each row and hide or show based on the keyword
    rows.forEach(row => {
        const mealName = row.cells[0].textContent.toLowerCase();
        if (mealName.includes(keyword.toLowerCase())) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Fetch meal data from the API
    fetchMeals();
});
 async function fetchMeals() {
    // Replace 'API_URL' with the URL of the public API
    await fetch('')
        .then  (response => response.json())
        .then(data => {
            // Check if the API response contains at least 5 objects with 3 attributes each
            if (Array.isArray(data) && data.length >= 5 && data.every(item => Object.keys(item).length >= 3)) {
                displayMeals(data);
            } else {
                console.error('Invalid API response. Expected at least 5 objects with at least 3 attributes each.');
            }
        })
        .catch(error => console.log(error))
}
function displayMeals(meals) {
    // Display the fetched meals
    // Implement as needed
}

