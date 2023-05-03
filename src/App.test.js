import { render, screen } from "@testing-library/react";

import App from "./App";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";

describe("In the Landing Page", () => {
  // describe("Header", () => {
  //   test("check brand name is correct", () => {
  //     render(<Header />);
  //     const brandName = screen.getByText("Broccoli & Co.");
  //     expect(brandName).toBeInTheDocument();
  //   });
  // });
  describe("Invite Form", () => {
    describe("Given Landing Page DID render correctly", () => {
      it("Should find the 'Request an Invite' Button", () => {
        render(<App />);
        expect(screen.getByRole("button")).toBeInTheDocument();
      });
    });

    describe("Given the Invite Form Modal did NOT open", () => {
      it("Should NOT find the 'Send' Button", () => {
        render = () => <Modal onClose />;
        expect(screen.queryByRole("Button")).toBeNull();
      });
    });
  });
});
