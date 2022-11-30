import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import {Calculator} from "./calculator";

describe('Calculator', () => {
    test('should update display according to the button pressed', () => {
        render(<Calculator/>);
        const numberInputTwo = screen.getByAltText('number input two');
        const calculatorDisplay = screen.getByAltText('calculator display');

        expect(calculatorDisplay.textContent).toEqual('')

        userEvent.click(numberInputTwo);

        expect(calculatorDisplay.textContent).toEqual('2')
    })
});