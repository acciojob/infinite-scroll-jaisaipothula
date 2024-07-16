() => { 
    cy.visit("http://localhost:3000");

    // Wait for the element #infi-list to exist and be visible
    cy.get('#infi-list', { timeout: 10000 }).should('exist').scrollTo('bottom');
}



