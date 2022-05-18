import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders learn react link", () => {
  render(<App />);
  const header = screen.getByText(/Online store/i);
  expect(header).toBeInTheDocument();
});