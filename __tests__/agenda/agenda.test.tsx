import Agenda from "@/pages/agenda";
import { render, screen } from "@testing-library/react";

describe("Agenda", () => {
  it("renders the agenda", () => {
    const { container } = render(<Agenda />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders the calendar table", async () => {
    render(<Agenda />);
    await expect(screen.getByTestId("calendar")).toBeInTheDocument();
  });
});
