describe('Infinite Scrolling Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Replace with your actual URL
  });

  it('should load additional list items on scroll', () => {
    // Check if the initial list exists
    cy.get('#list').should('exist');

    // Perform assertions within the viewport
    cy.viewport('macbook-15'); // Adjust viewport as necessary

    // Scroll to the bottom to trigger loading more items
    cy.scrollTo('bottom');

    // Wait for the new items to load
    cy.get('#list li').should('have.length', 12); // Adjust length as per your implementation
  });
});

