import Home from "src/pages";
import { render } from "@testing-library/react";

describe("Home page", () => {
  test("matches text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Hello World!")).toBeTruthy();
  });
});