import { render, screen } from "@testing-library/react";
import CallForSchedule from "./CallForSchedule";

describe("<CallForSchedule/>", () => {
  it("should show call for schedule section", () => {
    render(<CallForSchedule />);
    expect(screen.getByTestId("callForSchedule")).toBeInTheDocument();
  });

  it("should show a CTA button", () => {
    render(<CallForSchedule />);
    expect(
      screen.getByRole("button", {
        name: /agendar minha consulta/i,
      })
    );
  });
});
