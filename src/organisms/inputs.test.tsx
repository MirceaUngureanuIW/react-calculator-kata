import {render, screen} from "@testing-library/react";
import {Inputs} from "./inputs";
import React from "react";
import {DefaultValue, InputContext} from "../contexts/calculator-context";
import userEvent from "@testing-library/user-event";


describe('Inputs', () => {
    test('should updates state with number pressed', () => {
        const mockValue: DefaultValue = {
            history: [],
            setHistory: jest.fn()
        }

        render(<InputContext.Provider value={mockValue}>
            <Inputs/>
        </InputContext.Provider>);

        let numberInput4 = screen.getByAltText('number input four');
        userEvent.click(numberInput4);

        expect(mockValue.setHistory).toBeCalledWith(['4']);
    });
});