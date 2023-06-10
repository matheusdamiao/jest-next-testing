import { render, screen } from "@testing-library/react";
import About from "./About";

describe("<About/>", () => {
  it("should show hero section", () => {
    render(<About />);
  });
});
