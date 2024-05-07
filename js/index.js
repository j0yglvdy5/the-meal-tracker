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
    try{
     const response = await fetch("https://fdc.nal.usda.gov/")
     const data = await response.json();
      console.log(data);
    }catch(error){
        console.error('Error fetching data:', error);
    }
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
