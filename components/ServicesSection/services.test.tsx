import { render, screen } from "@testing-library/react";
import Services from "./Services";

describe("<Services/>", () => {
  it("should show services section", () => {
    render(<Services />);
    expect(screen.getByTestId("services")).toBeInTheDocument();
  });

  it("should render a title", () => {
    render(<Services />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("should render cards", () => {
    render(<Services />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
