import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

// 1. Render App
// 2. Assert that I don't see any popups/modals by default
describe("Given Landing Page DID render correctly", () => {
  //   it("Should NOT be displaying any modals (THIS SHOULD FAIL)", () => {
  //     render(<App />);
  //     expect(screen.queryByText("Full Name")).not.toBeInTheDocument();
  //   });
  // });
  // 3. Find the "Invite" button
  // describe("Given Landing Page DID render correctly", () => {
  it("Should find a button", () => {
    render(<App />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

// 4. Click on it
// 5. Assert that I now see the modal
// describe("After clicking on 'Request an Invite' button", () => {
//   it("Should display a modal titled 'Request an Invite'", () => {
//     render(<App />);
//     fireEvent.click(screen.getByRole("button"));
//     expect(screen.getByTestId("dialog-title").textContent).toBe(
//       "Request an Invite"
//     );
//   });
// });

// 6. Click outside it
// 7. Assert I can no longer see the modal
