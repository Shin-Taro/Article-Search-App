import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Presets from "../Presets";
import { changeActive } from "../../firebase";

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
  changeActive: jest.fn(),
}));

const mockFunc = jest.fn();
const mockProps = {
  runPresets:mockFunc
};

describe("<Presets/>", () => {
  test("runPresets should be called", () => {
    render(<Presets {...mockProps}/>);
    userEvent.click(screen.getByRole("button", {name:"新着"}));
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test("changeActive should be called", () => {
    render(<Presets {...mockProps}/>);
    userEvent.click(screen.getByRole("button", {name:"新着"}));
    expect(changeActive).toHaveBeenCalled();
  });
});
