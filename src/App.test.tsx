import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('when I run the calculation of "2 + 2" I expect the result to be 4', () => {
  render(<App />);
  const numberInputTwo = screen.getByAltText('number input two');
  const numberInputAdd = screen.getByAltText('number input add');
  const numberInputEquals = screen.getByAltText('number input equals');
  const calculatorDisplay = screen.getByAltText('calculator display');

  expect(calculatorDisplay.textContent).toEqual('')

  userEvent.click(numberInputTwo);
  userEvent.click(numberInputAdd);
  userEvent.click(numberInputTwo);
  userEvent.click(numberInputEquals);

  expect(calculatorDisplay.textContent).toEqual('4')
});