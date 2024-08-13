//your JS code here. If required.
describe('Background Image Test', function() {
  it('Should have the correct background image', function() {
    cy.visit('http://localhost:3000') // replace with your app's URL
    cy.get('h1') // get the h1 element
      .should('be.visible') // ensure it is visible (i.e., has loaded)
      .should('have.css', 'background-image', 'url("https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg")'); // then check the background image
  });
});