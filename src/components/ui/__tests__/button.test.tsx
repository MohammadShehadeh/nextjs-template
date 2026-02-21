import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../button";

describe("Button", () => {
  it("should render the button with the text 'Click me'", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
