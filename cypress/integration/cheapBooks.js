describe('Visits book store and finds cheapest book', () => {
    it.skip('Visits book store and finds cheapest book', () => {
        cy.visit('https://www.barnesandnoble.com/');
        cy.get(`[id="searchBarBN"]`).type('Left Hand of Darkness');
        cy.get('.icon-search-2').click();
        cy.wait(6000);
        cy.get(`[id="sortProducts1-replacement"]`).click();
        cy.get(`[id="sortProducts1-option-4"]`).click();
    });

    it('Visits book store and adds 3 books to cart', () => {
        cy.visit('https://www.barnesandnoble.com/');
        cy.get(`[id="searchBarBN"]`).type('Philip Pullman');
        cy.get('.icon-search-2').click();
        cy.wait(6000);
        cy.get(`[id="sortProducts1-replacement"]`).click();
        cy.get(`[id="sortProducts1-option-0"]`).click();

        cy.get(`[data-work-id="1137311323"]`).eq(0).click();
        cy.get('.btn-addtocart').click();

        cy.get(`[data-work-id="1131973048"]`).eq(0).click();
        cy.get('.btn-addtocart').click();
        
        cy.get(`[data-work-id="1126515077"]`).eq(0).click();
        cy.get('.btn-addtocart').click();

        cy.get(`[id="shoppingBagLink"]`).click();
        cy.log(`[id="bagTotal"]`);
        cy.get(`[id="bagTotal"]`).contains('3');
    });
});