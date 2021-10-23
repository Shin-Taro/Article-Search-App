import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { deletePresets } from "../../firebase";
import PresetsDelete from "../PresetsDelete";

jest.mock("../../context/AuthContext", () => ({
  useAuthContext: jest.fn(() => ({userName:"fakeUser"})),
}));

jest.mock("../../context/UserContext", () => ({
  useUserContext: jest.fn(() => ({
    presets:[
    {
      name: "新着",
      value: "created%3A%3E2021-08-01",
      isActive: false,
      id: "fakeID01",
    },
    {
      name: "人気",
      value: "created%3A%3E2021-08-01+stocks%3A%3E20",
      isActive: false,
      id: "fakeID02",
    },
    {
      name: "殿堂入り",
      value: "stocks%3A%3E5000",
      isActive: false,
      id: "fakeID03",
    }
  ]}))
}));

jest.mock("../../firebase", () => ({
  deletePresets: jest.fn(),
}));

describe("<PresetsDelete/>", () => {
  test("item should be checked", () => {
    render(<PresetsDelete/>);
    userEvent.click(screen.getByLabelText("新着"));
    expect(screen.getByLabelText("新着")).toBeChecked();
  });

  test("item should be unchecked", () => {
    render(<PresetsDelete/>);
    userEvent.click(screen.getByLabelText("新着"));
    userEvent.click(screen.getByLabelText("新着"));
    expect(screen.getByLabelText("新着")).not.toBeChecked();
  });

  test("deletePresets should be called", () => {
    render(<PresetsDelete/>);
    userEvent.click(screen.getByLabelText("新着"));
    userEvent.click(screen.getByRole("button"));
    expect(deletePresets).toHaveBeenCalledTimes(1);
  });
});