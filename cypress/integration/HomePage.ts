// @ts-nocheck
describe("Home page interactions", () => {
	beforeEach(() => {
		cy.visit("localhost:3000");
	});

	it("Should load pokemons", () => {
		cy.get("[data-cy='item-bulbasaur']").should("be.visible");
	});

	it("Should load more pokemons", () => {
		cy.get("[data-cy='item-bulbasaur']").should("be.visible");
		cy.get("[data-cy='button-fetch']").click();
		cy.get("[data-cy='item-pidgeot']").should("be.visible");
	});

	it("Should display modal", () => {
		cy.get("[data-cy='item-bulbasaur']").should("be.visible").click();
		cy.get("[data-cy='modal-bulbasaur']").should("be.visible");
	});

	it("Should filter pokemons", () => {
		cy.get("[data-cy='item-bulbasaur']").should("be.visible");
		cy.get("[data-cy='input-name'").type("bulbasaur");
		cy.get("[data-cy='button-filter'").click();
		cy.get("[data-cy='item-bulbasaur']").should("be.visible");
		cy.get("[data-cy='item-ivysaur']").should("not.exist");
	});
});

export {};
