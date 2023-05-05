import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

// 1. Render App
// 2. Assert that I don't see any popups/modals by default
describe("Given Landing Page DID render correctly", () => {
  it("Should NOT be displaying any modals", () => {
    render(<App />);
    expect(screen.queryByText(/full Name/i)).not.toBeInTheDocument();
  });
  // });
  // _________________________________________
  // 3. Find the "Invite" button
  // describe("Given Landing Page DID render correctly", () => {
  it("Should find the 'Request an Invite' button", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /request an invite/i })
    ).toBeInTheDocument();
  });
});
// _________________________________________
// 4. Click on it
// 5. Assert that I now see the modal
describe("After clicking on 'Request an Invite' button", () => {
  it("Should display a modal titled 'Request an Invite'", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /request an InVite/i }));
    expect(screen.getByTestId("dialog-title").textContent).toBe(
      "Request an Invite"
    );
  });
});
// _________________________________________
// 6. Click outside it
// 7. Assert I can no longer see the modal
