import { render, screen } from "@testing-library/react";
import About from "@/pages/about";
import Home from "@/pages/index";

describe("About page", () => {
  it("renders a title", () => {
    render(<About />);

    const about = screen.getByTestId("about");
    expect(about).toBeInTheDocument;
  });
});
