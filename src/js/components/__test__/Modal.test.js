import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from "../Modal";

const mockFunc = jest.fn();
const mockProps = {
  show:true,
  onClick:mockFunc,
  children:<div>fake children</div>,
};

describe("<Modal/>", ()=> {
  test("onClick should be called", () => {
    render(<Modal {...mockProps}/>);
    userEvent.click(screen.getByRole("button"));
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});