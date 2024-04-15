import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Paragraph from "./Paragraph";

describe("Paragraph Component", () => {
  it("renders text correctly", () => {
    const text = "Hello, world!";
    const { getByText } = render(<Paragraph text={text} />);
    const paragraphElement = getByText(text);
    expect(paragraphElement).toBeTruthy();
  });

  it("renders numbers correctly", () => {
    const number = 12345;
    const { getByText } = render(<Paragraph text={number} />);
    const paragraphElement = getByText(number.toString());
    expect(paragraphElement).toBeTruthy();
  });
});
