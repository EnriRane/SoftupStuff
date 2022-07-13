import { render, within, screen } from "@testing-library/react";
import Login from "../components/routes/auth/Login/Login";

test("renders Translator in Login component", () => {
  render(<Login />);
  const translator = screen.getByTestId("translator");
  const translatorInLogin = within(translator).getAllByTestId("translator");
  expect(translatorInLogin.length).toBe(1);
});
