import { render, screen } from "@testing-library/react";

import { Header } from "./components/Header";

test("check brand name is correct in Header", () => {
  render(<Header />);
  const brandName = screen.getByText("Broccoli & Co.");
  expect(brandName).toBeInTheDocument();
});
