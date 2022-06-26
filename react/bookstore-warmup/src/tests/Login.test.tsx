import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../components/routes/auth/Login/Login";

test("renders login component", () => {
  render(<Login />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
