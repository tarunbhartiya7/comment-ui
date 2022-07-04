import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text sidebar", () => {
  render(<App />);
  const text = screen.queryByText("sidebar");
  expect(text).toBeTruthy();
});
