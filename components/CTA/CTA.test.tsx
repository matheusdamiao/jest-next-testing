import { render, screen } from "@testing-library/react";
import CTA from "./CTA";

describe("<CTA/>", () => {
  it("should show CTA button", () => {
    render(<CTA />);
    expect(screen.getByTestId("CTA")).toBeInTheDocument();
  });
});
