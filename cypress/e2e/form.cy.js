describe('check if website can be reached', () => {
    it('passes', () => {
      cy.visit('https://laureatus.github.io/m152/form.html')
      cy.get('#demo-name').type('John Doe')
      cy.get('#demo-email').type('john.doe@example')
      cy.get('#demo-category').select('Administration')
      cy.get('#demo-priority-normal').click()
      cy.get('#demo-copy').invoke('show');
      cy.get('#demo-copy').click({ force: true })
      cy.get('#demo-human').invoke('show');
      cy.get('#demo-human').click({ force: true })
      cy.get('#demo-message').type('Hello World')
      cy.get('.actions:nth-child(2)').click()
    })
  })