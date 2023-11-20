describe('Cart validation test', () => {
  beforeEach(() => {
    cy.visit('/category/headphones');
  });
  it('adding and removing items', () => {
    cy.visit('/category/headphones/xx99-mark-two-headphones');

    cy.getDataTest('product-add-button').click();
    cy.getDataTest('product-add-button').click();
    cy.getDataTest('product-add-button').click();

    cy.getDataTest('nav-cart').click();

    cy.getDataTest('nav-cart').find('span').should('have.text', '1');
    cy.getDataTest('nav-cart').click();
    cy.getDataTest('cart-list').children().should('have.length', 1);

    cy.getDataTest('product-name')
      .invoke('text')
      .then((text) => {
        const productName = text.split('  ').join(' ').slice(0, -1);
        cy.getDataTest('cart-list').contains(new RegExp(productName, 'i'));
      });

    cy.getDataTest('cart-product')
      .its(0)
      .within(() => {
        cy.getDataTest('input-number-value').contains(3);
      });

    cy.getDataTest('cart-product')
      .its(0)
      .within(() => {
        cy.getDataTest('input-number-decrease').click();
        cy.getDataTest('input-number-decrease').click();

        cy.getDataTest('input-number-value').contains(1);
      });

    // Clean up cart
    cy.getDataTest('cart-clear-button').click();
    cy.getDataTest('cart-list').within(() => {
      cy.getDataTest('cart-product').should('have.length', 0);
    });
    cy.getDataTest('nav-cart').find('span').should('not.exist');
  });
});
