/* eslint-disable no-undef */
describe('Sign up form', () => {
  it('Matches snapshot', () => {
    cy.visit('http://localhost:3000');
    cy.matchImageSnapshot();
  });
});
