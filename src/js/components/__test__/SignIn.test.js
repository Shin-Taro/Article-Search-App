import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from "../SignIn";
import { signIn, signInAnony } from "../../firebase";


jest.mock("../../firebase", () => ({
  signInAnony: jest.fn(),
  signIn: jest.fn(),
}));

describe("<SignIn />", () => {
  test("anony signin", () => {
    render(<SignIn/>);
    userEvent.click(screen.getByRole("button", {name: "ゲストで始める"}));
    expect(signInAnony).toHaveBeenCalledTimes(1);
  });

  test("Google signIn", () => {
    render(<SignIn/>);
    userEvent.click(screen.getByRole("button", {name: "Googleアカウントでログイン"}));
    expect(signIn).toHaveBeenCalledTimes(1);
  });
});