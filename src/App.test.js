import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe("Given Landing Page DID render correctly", () => {
  it("Should NOT be displaying any modals", () => {
    render(<App />);
    expect(screen.queryByText(/full Name/i)).not.toBeInTheDocument();
  });

  it("Should find the 'Request an Invite' button", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /request an invite/i })
    ).toBeInTheDocument();
  });
});

describe("After clicking on 'Request an Invite' button", () => {
  it("Should display a modal titled 'Request an Invite'", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /request an invite/i }));
    expect(screen.getByTestId("dialog-title").textContent).toBe(
      "Request an Invite"
    );
  });
});

describe("After clicking outside of the form modal", () => {
  it("Should NOT be visible", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("landing-page"));
    expect(screen.queryByText(/full Name/i)).not.toBeInTheDocument();
  });
});
