import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignOut from "../SignOut";
import { logOut } from "../../firebase";

jest.mock("../../firebase", () => ({
  logOut: jest.fn(),
}));

jest.mock("../../context/AuthContext", () => ({
  useAuthContext: jest.fn(() => ({userName:"fakeUser"})),
}));

describe("<SiginOut />", () => {
  test("logOut should called", () => {
    render(<SignOut />);
    userEvent.click(screen.getByRole("button"));
    expect(logOut).toHaveBeenCalledTimes(1);
  });
});

