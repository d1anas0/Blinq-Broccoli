import { render, screen } from "@testing-library/react";

import App from "./App";

describe("In the Landing Page", () => {
  describe("Request Invite Form", () => {
    describe("Given Landing Page DID render correctly", () => {
      it("Should find the 'Request an Invite' button", () => {
        render(<App />);
        expect(screen.getByRole("button")).toBeInTheDocument();
      });
    });
    describe("Given the 'Request Invite Form' did NOT open", () => {
      it("Should NOT display the form", () => {
        render(<Modal closeModal />);
        expect(screen.queryByRole("form")).toBeNull();
      });
    });
    describe("Given the 'Request Invite Form' DID open", () => {
      it("Should find the 'Send' button", () => {
        render(<Modal open />);
        expect(screen.getByText(/send/i)).toBeInTheDocument();
      });
    });
  });
});
