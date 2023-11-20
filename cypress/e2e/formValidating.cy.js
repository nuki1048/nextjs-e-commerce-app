describe('Order form test', () => {
  beforeEach(() => {
    cy.visit('/category/headphones/xx99-mark-two-headphones');

    cy.getDataTest('product-add-button').click();

    cy.getDataTest('nav-cart').find('span').should('have.text', '1');
    cy.getDataTest('nav-cart').click();
    cy.getDataTest('cart-list').children().should('have.length', 1);

    cy.visit('/checkout');

    cy.getDataTest('checkout-form').should('exist').and('be.visible');

    cy.get('input[name="name"]').as('input-name');
    cy.get('input[name="email"]').as('input-email');
    cy.get('input[name="telephone"]').as('input-telephone');
    cy.get('input[name="address"]').as('input-address');
    cy.get('input[name="zipCode"]').as('input-zipCode');
    cy.get('input[name="country"]').as('input-country');
    cy.get('input[name="city"]').as('input-city');
    cy.get('input[type="radio"][value="e-Money"]').as('checkbox-e-money');
    cy.get('input[type="radio"][value="Cash on Delivery"]').as('checkbox-cash');

    cy.intercept('POST', '/api/order', (req) => {
      req.reply({
        statusCode: 201,
        body: {
          message: 'Order added successfully',
        },
      });
    }).as('submit-request');
  });

  it('Empty fields test', () => {
    cy.getDataTest('checkout-form-submit-button').click();

    cy.contains(/Email field is required\./i);
    cy.contains(/Name field is required\./i);
    cy.contains(/Telephone field is required\./i);
    cy.contains(/Address field is required\./i);
    cy.contains(/Zip-code field is required\./i);
    cy.contains(/Country field is required\./i);
    cy.contains(/City field is required\./i);
  });
  it('Incorrect value in fields', () => {
    cy.get('@input-name').type('H');
    cy.get('@input-email').type('H');
    cy.get('@input-telephone').type(1);
    cy.get('@input-address').type('H');
    cy.get('@input-zipCode').type(1);
    cy.get('@input-country').type('H');
    cy.get('@input-city').type('H');

    cy.getDataTest('checkout-form-submit-button').click();

    cy.contains(/Please enter a valid email address\./i);
    cy.contains(/Name field must be at least 2 characters long\./i);
    cy.contains(/Telephone field must be at least 5 characters long\./i);
    cy.contains(/Address field must be at least 2 characters long\./i);
    cy.contains(/Zip-code field must be at least 5 characters long\./i);
    cy.contains(/Country field must be at least 2 characters long\./i);
    cy.contains(/City field must be at least 2 characters long\./i);
  });

  it('Correctly fields', () => {
    // Entering the values
    cy.get('@input-name').type('Alexei Vostok');
    cy.get('@input-email').type('alexei@gmail.com');
    cy.get('@input-telephone').type(380935351758);
    cy.get('@input-address').type('Борисоглібська');
    cy.get('@input-zipCode').type(35678);
    cy.get('@input-country').type('Ukraine');
    cy.get('@input-city').type('Kyiv');
    cy.get('@checkbox-e-money').click();

    cy.get('input[name="eMoneyNumber"]').type(123123);
    cy.get('input[name="eMoneyPin"]').type(123123);

    cy.getDataTest('checkout-form-submit-button').click();

    cy.wait('@submit-request')
      .its('request.body')
      .then((requestBody) => {
        // Checking nested properties in billingDetails
        expect(requestBody.billingDetails).to.haveOwnProperty('name');
        expect(requestBody.billingDetails).to.haveOwnProperty('telephone');
        expect(requestBody.billingDetails.telephone).to.be.a('number');
        expect(requestBody.billingDetails).to.haveOwnProperty('email');
        expect(requestBody.billingDetails.email).to.be.a('string').that.is.not
          .empty;

        // Checking nested properties in deliveryInfo
        expect(requestBody.deliveryInfo).to.haveOwnProperty('address');
        expect(requestBody.deliveryInfo.address).to.be.a('string').that.is.not
          .empty;
        expect(requestBody.deliveryInfo).to.haveOwnProperty('zipCode');
        expect(requestBody.deliveryInfo.zipCode).to.be.a('number');
        expect(requestBody.deliveryInfo).to.haveOwnProperty('country');
        expect(requestBody.deliveryInfo.country).to.be.a('string').that.is.not
          .empty;
        expect(requestBody.deliveryInfo).to.haveOwnProperty('city');
        expect(requestBody.deliveryInfo.city).to.be.a('string').that.is.not
          .empty;

        // Checking nested properties in summary
        expect(requestBody.summary).to.haveOwnProperty(
          'totalWithTaxAndDelivery'
        );
        expect(requestBody.summary.totalWithTaxAndDelivery).to.be.a('number');
        expect(requestBody.summary).to.haveOwnProperty('totalWithTax');
        expect(requestBody.summary.totalWithTax).to.be.a('number');
        expect(requestBody.summary).to.haveOwnProperty(
          'totalWithoutTaxesAndDelivery'
        );
        expect(requestBody.summary.totalWithoutTaxesAndDelivery).to.be.a(
          'number'
        );
        expect(requestBody.summary).to.haveOwnProperty('delivery');
        expect(requestBody.summary.delivery).to.be.a('number');
        expect(requestBody.summary).to.haveOwnProperty('taxes');
        expect(requestBody.summary.taxes).to.be.a('number');

        cy.contains(/THANK YOU FOR YOUR ORDER/i);
      });

    cy.wait(6000);

    cy.contains(/THANK YOU FOR YOUR ORDER/i).should('not.exist');

    cy.location('pathname').should('eq', '/');
  });
});
