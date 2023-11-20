describe('Navbar testing', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.getDataTest('nav-home').as('nav-home');
    cy.getDataTest('nav-home-logo').as('nav-home-logo');
    cy.getDataTest('nav-category-headphones').as('nav-category-headphones');
    cy.getDataTest('nav-category-speakers').as('nav-category-speakers');
    cy.getDataTest('nav-category-earphones').as('nav-category-earphones');
    cy.getDataTest('category-link-headphones')
      .find('a[href]:not([href=""])')
      .as('category-link-headphones');
    cy.getDataTest('category-link-speakers')
      .find('a[href]:not([href=""])')
      .as('category-link-speakers');
    cy.getDataTest('category-link-earphones')
      .find('a[href]:not([href=""])')
      .as('category-link-earphones');
    cy.getDataTest('grid-speaker-zx9')
      .find('a[href]:not([href=""])')
      .as('grid-speaker-zx9');
    cy.getDataTest('grid-speaker-zx7')
      .find('a[href]:not([href=""])')
      .as('grid-speaker-zx7');
    cy.getDataTest('grid-yx1-earphones')
      .find('a[href]:not([href=""])')
      .as('grid-yx1-earphones');
  });

  it('Routing test', () => {
    // Navbar
    cy.get('@nav-category-headphones').click();
    cy.location('pathname').should('eq', '/category/headphones');

    cy.get('@nav-home-logo').click();
    cy.location('pathname').should('eq', '/');

    cy.get('@nav-category-speakers').click();
    cy.location('pathname').should('eq', '/category/speakers');

    cy.get('@nav-category-earphones').click();
    cy.location('pathname').should('eq', '/category/earphones');

    cy.get('@nav-home').click();
    cy.location('pathname').should('eq', '/');

    // Category links block

    cy.get('@category-link-headphones').click();
    cy.location('pathname').should('eq', '/category/headphones');

    cy.visit('/');

    cy.get('@category-link-speakers').click();
    cy.location('pathname').should('eq', '/category/speakers');

    cy.visit('/');

    cy.get('@category-link-speakers').click();
    cy.location('pathname').should('eq', '/category/speakers');

    cy.visit('/');

    cy.get('@category-link-earphones').click();
    cy.location('pathname').should('eq', '/category/earphones');

    cy.visit('/');

    // Home page grid block

    cy.get('@grid-speaker-zx9').click();
    cy.location('pathname').should('eq', '/category/speakers/zx9-speaker');

    cy.visit('/');

    cy.get('@grid-speaker-zx7').click();
    cy.location('pathname').should('eq', '/category/speakers/zx7-speaker');

    cy.visit('/');
  });
});
