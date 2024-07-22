document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('list');
  let items = document.getElementsByTagName('li');
  let itemCount = items.length;

  // Function to add more items to the list
  function addMoreItems() {
    for (let i = 0; i < 2; i++) {
      const newItem = document.createElement('li');
      newItem.textContent = `List Item ${++itemCount}`;
      list.appendChild(newItem);
    }
    items = document.getElementsByTagName('li'); // Update items array
  }

  // Function to check if user has reached end of list
  function isEndOfList() {
    const lastItem = items[itemCount - 1];
    const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    return pageOffset > lastItemOffset - 20; // Consider a threshold of 20px before the end
  }

  // Initial load of 10 items
  for (let i = 0; i < 10; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = `List Item ${i + 1}`;
    list.appendChild(newItem);
  }

  // Event listener for scroll events
  window.addEventListener('scroll', () => {
    if (isEndOfList()) {
      addMoreItems();
    }
  });
});
