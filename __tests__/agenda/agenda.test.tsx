import Agenda from "@/pages/agenda";
import { render, screen } from "@testing-library/react";

describe("Agenda", () => {
  it("renders an agenda title", () => {
    const { container } = render(<Agenda />);
    expect(container).toBeInTheDocument();
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
