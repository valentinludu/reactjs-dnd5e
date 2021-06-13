import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("renders config screen", () => {
    render(<App />);
    const app = screen.getByTestId("app");
    const startingTitle = screen.getByText(
      "Welcome to Dungeons and Dragons character builder"
    );

    expect(app).toBeInTheDocument();
    expect(startingTitle).toBeInTheDocument();
  });
});
