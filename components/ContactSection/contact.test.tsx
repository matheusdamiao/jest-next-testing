import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("<Contact/>", () => {
  it("should show contact section", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  it("should show a CTA button", () => {
    render(<Contact />);
    expect(screen.getByTestId("CTA")).toBeInTheDocument();
  });
});
