import Navbar from "@/app/page";

describe("Navbar Components Component"),
  () => {
    it("render component correctly", () => {
      cy.mount(<Navbar />);
      cy.get('a[href="/"]').should('exist')
    });
  };
