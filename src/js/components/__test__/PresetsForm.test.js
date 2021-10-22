import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PresetsForm from "../PresetsForm";
import { addPreset } from "../../firebase";

jest.mock("../../firebase", () => ({
  addPreset: jest.fn(),
}));

jest.mock("../../context/AuthContext", () => ({
  useAuthContext: jest.fn(() => ({userName:"fakeUser"})),
}));

describe("<PresetsForm />", () => {
  test("form should success", () => {
    render(<PresetsForm/>);

    userEvent.type(screen.getByPlaceholderText("name"), "JavaScript");
    expect(screen.getByPlaceholderText("name")).toHaveValue("JavaScript");

    userEvent.type(screen.getByPlaceholderText("query"), "JavaScript");
    expect(screen.getByPlaceholderText("query")).toHaveValue("JavaScript");

    userEvent.click(screen.getByRole("button"));
    expect(addPreset).toHaveBeenCalledTimes(1);
    expect(screen.getByText("success!!")).toBeInTheDocument();
  });

  test("form should be the error with '項目が入力されていません'", () => {
    render(<PresetsForm/>);
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("項目が入力されていません")).toBeInTheDocument();
  });

  test("form should be the error with '不正な入力です'", () => {
    render(<PresetsForm/>);
    userEvent.type(screen.getByPlaceholderText("name"), "11文字以上の入力です");
    userEvent.type(screen.getByPlaceholderText("query"), "JavaScript");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("不正な入力です")).toBeInTheDocument();
  });
});