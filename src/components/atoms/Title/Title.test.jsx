import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Title from "./Title";

describe("Title Component", () => {
  it("renders text correctly", () => {
    const text = "Hello, world!";
    const size = "small";
    const { getByText } = render(<Title text={text} size={size} />);
    const titleElement = getByText(text);
    expect(titleElement).toBeTruthy();
  });

  it("renders empty text when text prop is empty", () => {
    const text = "";
    const size = "big";
    const { container } = render(<Title text={text} size={size} />);
    const titleElement = container.querySelector("h2");
    expect(titleElement.textContent).toBe("");
  });
});
