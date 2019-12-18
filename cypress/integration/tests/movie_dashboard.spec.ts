/// <reference types="Cypress" />

describe('movie_dashboard', () => {

    it('should load', () => {
    cy.visit('/');
    cy.get('#mainHeader').contains('Movies Dashboard')
    cy.get('#buttonNewMovie').click()
    cy.get('#title').type('my pelicula')
    cy.get('#director').type('my pel')
    cy.get('#protagonist').type('my pelic')
    cy.get('#year').type('1262')
    cy.get('#review').type('my blah blah pelicula')
    cy.get('#saveButton').click()
    cy.get('td').contains('my pelicula')
    });

})