import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from "../Header";

jest.mock("../../context/AuthContext", () => ({
  useAuthContext: jest.fn(() => ({user:{displayName:"fakename"}})),
}));

jest.mock("../../firebase", () => ({
  logOut: jest.fn(),
}));

describe("<Header/>", () => {
  test("Modal should be displayed", () => {
    render(<Header/>);
    expect(screen.queryByText("×")).toBeNull();
    userEvent.click(screen.getByRole("button", {name:"プリセット管理"}));
    expect(screen.getByText("×")).toBeInTheDocument();
  });
});