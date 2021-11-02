import { render, screen } from "@testing-library/react";
import EmojiResultsRow from "./EmojiResultsRow";

describe("Emoji Tests", () => {
  render(<EmojiResultsRow />);

  test("Emojies are rendered", () => {
    const emojiResultsRowEl = screen.getByTitle("emoji-results");
    expect(emojiResultsRowEl).toBeInTheDocument();
  });

  test("Emoji is copied", () => {
    const clipboard = new Clipboard(".copy-to-clipboard");
    const emojis = screen.getAllByTitle("emoji-results");
    userEvent.click(emojis[0]);
    console.log(clipboard.clipboardAction.text);
    expect(clipboard.clipboardAction.text).toBe("💯");
  });
});
