describe('Visits book store and finds cheapest book', () => {
    it('Visits book store and finds cheapest book', () => {
        cy.visit('https://www.barnesandnoble.com/');
        cy.get(`[id="searchBarBN"]`).type('Left Hand of Darkness');
        cy.click(.btn);
    })