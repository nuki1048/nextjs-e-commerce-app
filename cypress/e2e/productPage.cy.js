describe('Product page testing', () => {
  beforeEach(() => {
    cy.visit('/category/headphones/xx99-mark-two-headphones');
  });

  it('Product test', () => {
    // Checking all products blocks
    cy.getDataTest('product-name').should('exist').and('be.visible');
    cy.getDataTest('product-preview-image').should('exist').and('be.visible');
    cy.getDataTest('product-description').should('exist').and('be.visible');
    cy.scrollTo(0, 500);
    cy.getDataTest('product-features').should('exist').and('be.visible');
    cy.getDataTest('product-in-the-box').should('exist').and('be.visible');
    cy.getDataTest('product-in-the-box').children().should('have.length.gt', 0);
    cy.scrollTo(500, 1000);
    cy.getDataTest('product-gallery').should('exist').and('be.visible');

    // Trying to add item into cart
    cy.getDataTest('product-add-button').click();
    cy.contains(/You successfully added new item on cart\!/i).should('exist');
    cy.wait(4000);
    cy.contains(/You successfully added new item on cart\!/i).should(
      'not.exist'
    );
    cy.getDataTest('nav-cart').find('span').should('have.text', '1');
    cy.getDataTest('nav-cart').click();
    cy.getDataTest('cart-list').children().should('have.length', 1);

    // Checking name in cart matches product name
    cy.getDataTest('product-name')
      .invoke('text')
      .then((text) => {
        const productName = text.split('  ').join(' ').slice(0, -1);
        cy.getDataTest('cart-list').contains(new RegExp(productName, 'i'));
      });
  });
});
