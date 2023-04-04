describe('common-ui: UiComponentButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uicomponentbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UiComponentButton!');
    });
});
