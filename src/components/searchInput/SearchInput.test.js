import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App"

describe("Filter Tests", () => {
  render(<App />);

  test("Filter is working", () => {
    const input = screen.getByTitle("filter");
    userEvent.type(input, "Grinning");
    const emojies = screen.getAllByTitle("emoji-results");
    expect(emojies.length).toBe(1);
  });
});
