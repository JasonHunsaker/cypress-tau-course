/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/42257192965')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="task"]')
    .eq(2)
    .should('have.text', 'milk')

});