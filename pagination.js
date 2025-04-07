document.addEventListener("DOMContentLoaded", function () {
    const rowsPerPage = 10;
    const tableBody = document.getElementById("gamesTable");
    const rows = Array.from(tableBody.getElementsByTagName("tr"));
    const totalPages = 2; // Correct number of pages based on items
    let currentPage = 1;

    const pageTitles = {
        1: "Games",
        2: "Accessories"
    };

    function showPage(page) {
        tableBody.innerHTML = "";
        let start = (page - 1) * rowsPerPage;
        let end = start + rowsPerPage;
        rows.slice(start, end).forEach(row => tableBody.appendChild(row));

        document.getElementById("pagination").innerHTML = createPaginationButtons();
        updatePageTitle(page);
    }

    function createPaginationButtons() {
        let buttons = "";
        for (let i = 1; i <= totalPages; i++) {
            buttons += `<button class="btn btn-primary mx-1 ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">Page ${i}</button>`;
        }
        return buttons;
    }

    function updatePageTitle(page) {
        const title = pageTitles[page] || `Page ${page}`;
        document.getElementById("pageTitle").textContent = title;
    }

    window.changePage = function (page) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            showPage(currentPage);
        }
    };

    showPage(currentPage);
});
