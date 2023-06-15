import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calendly from "./Calendly";

describe("<Calendly/>", () => {
  it("should show calendly component", async () => {
    render(<Calendly />);
    await expect(screen.getByTestId("calendar")).toBeInTheDocument();
  });
});
