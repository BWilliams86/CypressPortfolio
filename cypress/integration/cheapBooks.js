import { visit, fillSearch, searchSubmit } from '../../page/homeObj';
import { sortDropdown, sortSelects } from '../../page/searchResultsPageObj';
import { cartLink, cartTotal, cartAdd } from '../../page/shoppingCartObj';

describe('Visits book store and finds cheapest book', () => {
    beforeEach(() => {
        visit();
    });

    it('Visits book store and finds cheapest book', () => {
        fillSearch('Ursula Le Guin');
        searchSubmit();
        cy.get(sortDropdown).click();
        cy.get(sortSelects.PRICE_LOW).click();
    });

    it('Visits book store and adds 3 books to cart', () => {
        fillSearch('Philip Pullman');
        searchSubmit();
        cy.get(sortDropdown).click();
        cy.get(sortSelects.TOP_MATCHES).click();

        var books = ["1137311323",
        "1131973048",
        "1126515077"
        ]
        books.forEach(bookID => {
            cy.log(bookID)
            cy.get(`[data-work-id=${bookID}]`).eq(0).click();
            cy.get(cartAdd).click();
        })

        cy.get(cartLink).click();
        cy.get(cartTotal).contains(books.length);
    });
});