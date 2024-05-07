document.addEventListener('DOMContentLoaded', function () {
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
    const tableId = `${category}-table`;
    const tableBody = document.querySelector(`#${tableId} tbody`);
    const rows = tableBody.querySelectorAll('tr');
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
    fetchMeals();
});
 async function fetchMeals() {
    await fetch('')
        .then  (response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length >= 5 && data.every(item => Object.keys(item).length >= 3)) {
                displayMeals(data);
            } else {
                console.error('Invalid API response. Expected at least 5 objects with at least 3 attributes each.');
            }
        })
        .catch(error => console.log(error))
}
function displayMeals(meals) {

}
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        showWelcomeMessage();
    }, 1000);
});

function showWelcomeMessage() {
    const welcomeMessage = document.querySelector('.welcome-message');
}
