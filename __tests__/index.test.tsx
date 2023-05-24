import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages/index";
import CTA from "@/components/CTA";

describe("Home", () => {
  it("renders a footer", () => {
    render(<Home />);

    const footer = screen.getByRole("contentinfo");

    expect(footer).toBeInTheDocument();
  });

  it("renders a CTA", () => {
    render(<CTA />);
    // const button = screen.getByRole("button");
    // expect(button).toHaveTextContent("Agende sua consulta");
    // expect(screen.getByText("Agend sua consulta")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Agende sua consulta" })
    ).toBeInTheDocument();
  });

  it("opens a modal", async () => {
    render(<CTA />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
