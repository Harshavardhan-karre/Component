import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./index";
import "@testing-library/jest-dom";
test("check for initial checkbox appearance on screen", () => {
  render(<CheckBox checked={true} onChange={() => null} />);

  const checkstatus = screen.getByRole("checkbox");

  expect(checkstatus).toBeInTheDocument();
  expect(checkstatus).toBeChecked();
});

test("checking for response from checkbox", () => {
  const handleChange = jest.fn();
  render(<CheckBox checked={false} onChange={handleChange} />);

  const button = screen.getByRole("checkbox");

  fireEvent.click(button);

  expect(handleChange).toHaveBeenCalledTimes(1);
});
