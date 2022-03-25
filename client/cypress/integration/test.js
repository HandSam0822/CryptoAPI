describe('Test cryptoAPI', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    });
    
    it("check ten exchanges are on home page.", ()=> {
        cy.get('.col').
        should("have.length", 10)
        cy.get('.route-btn').
        should("have.length", 10)
        cy.get('.route-btn').first().should('have.text', 'See Binance')        
    });

    it("go to each profile page, check go back button works", () => {
        for (var i = 0; i < 10; i++) {
            cy.get(".route-btn").eq(i).click()
            cy.url().should('include', '/profile')            
            cy.get(".route-btn").should("have.text", "back to main page").click()                        
            cy.url().should('include', '/')
        }              
    })
    it("go to each profile page, check all info is inculded", () => {
        for (var i = 0; i < 10; i++) {
            cy.get(".route-btn").eq(i).click()
            cy.contains("Trust score")
            cy.contains("Year of establishment")
            cy.contains("Social Media link")
            cy.contains("Description")            
            cy.get(".route-btn").eq(0).click()
            cy.url().should('include', '/')
        }    
    })
})
  