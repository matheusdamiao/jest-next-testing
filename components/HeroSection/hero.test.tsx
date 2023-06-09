import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("</Hero/>", () => {
  it("should show hero section", () => {
    render(<Hero />);
    expect(screen.getByTestId("heroSection")).toBeInTheDocument();
  });

  it("should show a top navigation menu", () => {
    render(<Hero />);
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });

  it("should show hero section image", () => {
    render(<Hero />);
    expect(screen.getByTestId("bg-img")).toBeInTheDocument();
  });

  it("should show hero section heading content", () => {
    render(<Hero />);
    expect(
      screen.getByText("Encontre seu equilibrio emocional")
    ).toBeInTheDocument();
  });

  it("should show a CTA", () => {
    render(<Hero />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
