import React from 'react';
//import { render, cleanup, fireEvent } from 'test-utils';
import {render, fireEvent, getByText} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Click from "../click";

it("should press button", () => {
    const click = jest.fn();
    //const { getByTestId } = render(<button type="button" data-testid="btn" onClick={click}>Aca</button>);
    const { getByTestId } = render(<Click name="carlos"></Click>);
    fireEvent.click(getByTestId("btn"));
    expect(getByTestId("name")).toHaveTextContent("carlos");
})