import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages/home";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/HeroSection/Hero";

describe("Home page", () => {
  it("renders a hero section", () => {
    render(<Hero />);
    expect(screen.getByTestId("heroSection")).toBeInTheDocument();
  });

  // it("renders a CTA", () => {
  //   render(<CTA />);
  //   // const button = screen.getByRole("button");
  //   // expect(button).toHaveTextContent("Agende sua consulta");
  //   // expect(screen.getByText("Agend sua consulta")).toBeInTheDocument();
  //   expect(
  //     screen.getByRole("button", { name: "Agende sua consulta" })
  //   ).toBeInTheDocument();
  // });

  // it("opens a modal", async () => {
  //   render(<CTA />);

  //   const button = screen.getByRole("button");
  //   await userEvent.click(button);
  //   expect(screen.getByTestId("modal")).toBeInTheDocument();
  // });
});
