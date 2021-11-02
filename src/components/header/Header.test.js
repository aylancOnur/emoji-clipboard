import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Tests", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("Header is rendered.", () => {
    const header = screen.getByText(/emoji search/i);
    expect(header).toBeInTheDocument();
  });
});
