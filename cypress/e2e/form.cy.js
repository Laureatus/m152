describe('Check if form can be filled out and reset', () => {
    it('checks reset button', () => {
      cy.visit('https://laureatus.github.io/m152/form.html')
      cy.get('#demo-name').type('John Doe')
      cy.get('#demo-email').type('john.doe@example')
      cy.get('#demo-category').select('Administration')
      cy.get(':nth-child(5) > label').click()
      cy.get(':nth-child(7) > label').click()
      cy.get(':nth-child(8) > label').click()
      cy.get('#demo-message').type('Hello World')
      cy.get('.actions > :nth-child(2) > input').click()
    })
  })

  describe('Check if form can be filled out and submitted', () => {
    it('checks reset button', () => {
      cy.visit('https://laureatus.github.io/m152/form.html')
      cy.get('#demo-name').type('John Doe')
      cy.get('#demo-email').type('john.doe@example')
      cy.get('#demo-category').select('Administration')
      cy.get(':nth-child(5) > label').click()
      cy.get(':nth-child(7) > label').click()
      cy.get(':nth-child(8) > label').click()
      cy.get('#demo-message').type('Hello World')
      cy.get('.primary').should('exist')
    })
  })