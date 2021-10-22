import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Controller from "../Controller";

const mockFunc = jest.fn();
const mockProps = {
  count: 1,
  onClick: mockFunc,
};

describe("<Controller/>", () => {
  test("callback test", () => {
    render(<Controller {...mockProps} />)
    userEvent.click(screen.getByRole("button", {name:"＞"}));
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});