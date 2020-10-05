describe('Visits book store and finds cheapest book', () => {
    it('Visits book store and finds cheapest book', () => {
        cy.visit('https://www.barnesandnoble.com/');
        cy.get(`[id="searchBarBN"]`).type('Left Hand of Darkness');
        cy.get('.icon-search-2').click();
        cy.get(`[id="sortProducts1-replacement"]`).find('#sortProducts1-option-4 > a')
          .click({ force: true });


//        cy.get(`[id=sortProducts1-replacement]`).click().then(() => {
//            cy.get(`[id="sortProducts1-option-4"]`).trigger('mouseover').then(() => {
//                cy.get(`[id="sortProducts1-option-4"]`).click({ force: true });
//            });
//        });

    });
});