import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import App from "./App";
import FormModal from "./components/FormModal";

afterEach(cleanup);

describe("In the Landing Page", () => {
  describe("Request Invite Form", () => {
    describe("Given Landing Page DID render correctly", () => {
      it("Should find the 'Request an Invite' button", () => {
        render(<App />);
        expect(screen.getByRole("button")).toBeInTheDocument();
      });
    });
    //   it("The button should call a function to open the 'Request Invite Form'", () => {
    //     render(<App />);
    //     const openModalSpy = jest.fn();
    //     fireEvent.click(screen.getByRole("button"));
    //     expect(openModalSpy).toHaveBeenCalled();
    //   });
    // it("Should find the 'Send' button", () => {
    //   // render(<FormModal openModal={isVisible} />);
    //   expect(screen.getByText(/send/i)).toBeInTheDocument();
    // });
  });
});
