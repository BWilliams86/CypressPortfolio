export function visit() {
    cy.visit('https://www.barnesandnoble.com/');
};

export function fillSearch(term) {
    const field = cy.get(`[id="searchBarBN"]`);
    field.clear();
    field.type(term);
    return this;
};

export function searchSubmit() {
    const button = cy.get(`.icon-search-2`);
    button.click();
    cy.wait(5000);
};
