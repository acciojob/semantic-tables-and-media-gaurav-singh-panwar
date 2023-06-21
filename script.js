//your code here
describe('Example To-Do App', () => {
  beforeEach(() => {
    cy.visit('your-webpage-url');
  });

  it('should display the table with 3 rows and 2 columns', () => {
    cy.get('table')
      .find('tr')
      .should('have.length', 4) // 4 to account for the table header row
      .each((row) => {
        cy.wrap(row)
          .find('td')
          .should('have.length', 2);
      });
  });

  it('should display the list of medias', () => {
    cy.get('ol')
      .find('li')
      .should('have.length', 3);
    
    cy.get('video')
      .should('have.attr', 'src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    
    cy.get('audio')
      .should('have.attr', 'src', 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg');
  });

  it('should have a heading "List of Medias"', () => {
    cy.get('h2')
      .should('contain', 'List of Medias');
  });
});