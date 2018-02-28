describe('SFDOC', () => {
  it('.should() - assert that <title> is correct', () => {
    cy.visit('https://soccer-directory-colorado.firebaseapp.com/');
    cy.title().should('include', 'SFDOC');
  });

    it('.should() - assert that <h1> is correct', () => {
      cy.visit('https://soccer-directory-colorado.firebaseapp.com/');
      cy.text().should('include', 'Soccer Field Directory of Colorado');
    });
});
