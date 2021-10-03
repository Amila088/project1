/// <reference types="cypress"/>

it('web page test', () => {
  cy.visit('https://demo.guru99.com/test/login.html');
});
it('login', () => {
  cy.get('#email').type('amilacehic@gmail.com');

  cy.get('#passwd').type('markomar12');
  cy.get('#SubmitLogin').click();
});
