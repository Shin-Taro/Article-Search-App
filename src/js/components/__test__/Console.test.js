import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Console from "../Console";

jest.mock("../PresetsForm", () => {
  return function returnForm() {
    return(<div>presetsForm</div>);
  }
});

jest.mock("../PresetsDelete", () => {
  return function returnDlete() {
    return(<div>presetsDelete</div>);
  }
});

describe("<Console />", () => {
  test("tab toggle", () => {
    render(<Console />);
    expect(screen.queryByText("presetsDelete")).toBeNull();
    userEvent.click(screen.getByText("delete"));
    expect(screen.getByText("presetsDelete")).toBeInTheDocument();
  });
});