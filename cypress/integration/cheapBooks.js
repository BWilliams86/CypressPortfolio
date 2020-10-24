import { visit, fillSearch, searchSubmit } from '../../page/homeObj';
import { visitEachChild } from 'typescript';

describe('Visits book store and finds cheapest book', () => {
    it('Visits book store and finds cheapest book', () => {
        visit();
        fillSearch('Ursula Le Guin');
        searchSubmit();
        cy.get(`[id="sortProducts1-replacement"]`).click();
        cy.get(`[id="sortProducts1-option-4"]`).click();
    });

    it.skip('Visits book store and adds 3 books to cart', () => {
        cy.search('Philip Pullman');
        cy.get(`[id="sortProducts1-replacement"]`).click();
        cy.get(`[id="sortProducts1-option-0"]`).click();

        var books = ["1137311323",
        "1131973048",
        "1126515077"
        ]
        books.forEach(bookID => {
            cy.log(bookID)
            cy.get(`[data-work-id=${bookID}]`).eq(0).click();
            cy.get(`.btn-addtocart`).click();
        })

        cy.get(`[id="shoppingBagLink"]`).click();
        cy.get(`[id="bagTotal"]`).contains(books.length);
    });
});