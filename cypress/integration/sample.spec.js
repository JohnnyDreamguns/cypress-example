/* eslint-disable no-undef */
describe('Sign up form', () => {
  it('Should allow text to be entered in each field', () => {
    cy.visit('http://localhost:3000');

    cy.get('#firstName')
      .type('John')
      .should('have.value', 'John');

    cy.get('#lastName')
      .type('Hodgson')
      .should('have.value', 'Hodgson');

    cy.get('#email')
      .type('john.hodgson@barclays.com')
      .should('have.value', 'john.hodgson@barclays.com');
  });

  it('Should show an error message if the lastname field is missing', () => {
    cy.visit('http://localhost:3000');

    cy.get('#firstName').type('John');
    cy.get('#email').type('john.hodgson@barclays.com');

    cy.contains('Sign Up').click();

    cy.get('.error').should('have.text', 'Please enter your last name');
  });

  it('Should show success message when form is submitted successfully', () => {
    cy.visit('http://localhost:3000');

    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Hodgson');
    cy.get('#email').type('john.hodgson@barclays.com');

    cy.contains('Sign Up').click();

    cy.get('.confirm-text').should(
      'have.text',
      'Thanks for signing up John : )'
    );
  });
});
