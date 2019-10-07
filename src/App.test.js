import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";

import App, { addOne } from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains BaseBall Score Board', ()=> {
  const { getByText } = render(<App />);
  getByText(/baseball score board/i);
});

test('addOne function adds 1 to the current strikes/balls', ()=> {
  expect(addOne(0)).toBe(1);
  expect(addOne(2)).toBe(3);
});