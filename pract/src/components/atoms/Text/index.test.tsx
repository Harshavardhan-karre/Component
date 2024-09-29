import React from "react";
import Text from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Text Component", () => {
  test("should render with default size if none is provided", () => {
    render(<Text text="Default Size" />);
    const textContent = screen.getByText(/Default Size/i);
    expect(textContent).toHaveStyle("font-size: 14px");
  });

  test("should handle missing size prop", () => {
    render(<Text text="No Size Specified" />);
    const textContent = screen.getByText(/No Size Specified/i);
    expect(textContent).toHaveStyle("font-size: 14px");
  });

  test("should render with the specified size", () => {
    render(<Text size={20} text="Hello World" />);
    const textContent = screen.getByText(/Hello World/i);
    expect(textContent).toHaveStyle("font-size: 20px");
  });
});
