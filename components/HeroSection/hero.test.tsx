import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import userEvent from "@testing-library/user-event";

describe("</Hero/>", () => {
  it("should show hero section", () => {
    render(<Hero />);
    expect(screen.getByTestId("heroSection")).toBeInTheDocument();
  });

  it("should show a top navigation menu", () => {
    // render(<Hero />);

    throw new Error("Not implemented");
  });

  it("should show hero section image", async () => {
    // render(<Hero />);

    throw new Error("Not implemented");
  });

  it("should show hero section heading content", async () => {
    // render(<Hero />);

    throw new Error("Not implemented");
  });

  it("should show a CTA", async () => {
    // render(<Hero />);

    throw new Error("Not implemented");
  });
});
