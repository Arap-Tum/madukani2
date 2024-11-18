const sidebar = document.querySelector(".sidebar");
const togglBtn = document.querySelector(".toggle-btn") ;
const  sidebarContent = document.querySelector(".sidebar-content");

/* Sidebar visibility*/

togglBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

//hide sidebar if clicked out of it
document.addEventListener('click', function(event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickInsideTogglBtn = togglBtn.contains(event.target);

    if(!isClickInsideSidebar && !isClickInsideTogglBtn) {
        sidebar.classList.remove('active');
    }
});


// Select all top-level menu items (li elements within the .menu > ul)
document.querySelectorAll(".menu > li").forEach(function (menuItem) {
    // When a menu item is clicked
    menuItem.addEventListener("click", function (event) {
        event.stopPropagation(); // Stop the click event from affecting other elements

        // Close any other open menu items
        menuItem.parentElement.querySelectorAll(".active").forEach(function (otherItem) {
            if (otherItem !== menuItem) {
                otherItem.classList.remove("active");
                let otherSubmenu = otherItem.querySelector("ul");
                if (otherSubmenu) otherSubmenu.style.display = "none"; // Hide the submenu
            }
        });

        // Toggle the "active" class on the clicked item
        menuItem.classList.toggle("active");

        // Find the submenu (if it exists) inside the clicked item
        let submenu = menuItem.querySelector("ul");

        // Show or hide the submenu
        if (submenu) {
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        }
    });
});


function goBack() {
    window.history.back();
}


