import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Quotation from "./Quotation";

describe("<Quotation/>", () => {
  it("should show quotation section", () => {
    render(<Quotation />);
    expect(screen.getByTestId("quotation")).toBeInTheDocument();
  });

  it("should show the quotation text", () => {
    render(<Quotation />);
    expect(
      screen.getByText(
        "A psicoterapia é uma jornada de reconciliação com a própria história"
      )
    ).toBeInTheDocument();
  });
});
