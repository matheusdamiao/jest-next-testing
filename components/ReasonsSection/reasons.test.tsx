import { render, screen } from "@testing-library/react";
import Reasons from "./Reasons";

describe("<Reasons/>", () => {
  it("should show reasons section", async () => {
    render(<Reasons />);
    expect(screen.getByTestId("reasons")).toBeInTheDocument();
  });

  it("should show the title 'por que fazer psicoterapia?", () => {
    render(<Reasons />);
    expect(
      screen.getByRole("heading", {
        name: /por que fazer psicoterapia\?/i,
      })
    );
  });
});
