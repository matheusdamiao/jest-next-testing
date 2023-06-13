import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQ from "./FAQ";

describe("<FAQ/>", () => {
  it("should show FAQ section", () => {
    render(<FAQ />);
    expect(screen.getByTestId("faq")).toBeInTheDocument();
  });

  it("should show open the answer to a question", async () => {
    render(<FAQ />);
    const question = screen.getAllByTestId("question");
    await userEvent.click(question[1]);
    expect(screen.getByTestId("answer")).toBeInTheDocument();
  });
});
