describe('common-ui: Banner component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=banner--primary&args=text;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Banner!');
    });
});
