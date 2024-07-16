document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');

    // Function to add a specified number of list items
    function addItems(numItems) {
        for (let i = 1; i <= numItems; i++) {
            const li = document.createElement('li');
            li.textContent = `List item ${i}`;
            list.appendChild(li);
        }
    }

    // Add 10 list items initially
    addItems(10);

    // Function to add more items when scrolled to the end
    function addMoreItems() {
        // Add 2 more items
        addItems(2);
    }

    // Detect when user scrolls to the end of the list
    list.addEventListener('scroll', function() {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            // Reached the bottom of the list
            addMoreItems();
        }
    });
});


