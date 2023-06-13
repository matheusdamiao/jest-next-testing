import { render, screen } from "@testing-library/react";
import About from "./About";

describe("<About/>", () => {
  it("should show hero section", () => {
    render(<About />);
    expect(screen.getByTestId("about")).toBeInTheDocument();
  });

  it("should show hero section title", () => {
    render(<About />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("should render a picture", () => {
    render(<About />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
