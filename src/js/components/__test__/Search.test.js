import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from "../Search";

const mockFunc = jest.fn();
const mockProps = {
  searchArticles:mockFunc,
};

describe("<Search />", () => {
  test("input value render", () => {
    render(<Search />);
    userEvent.type(screen.getByRole("textbox"), "JavaScript");
    expect(screen.getByRole("textbox")).toHaveValue("JavaScript");
  });

  test("serchArtcles should called", () => {
    render(<Search {...mockProps} />);
    userEvent.click(screen.getByRole("button"));
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});