import React from 'react';
import { render } from "@testing-library/react";

import Display from "./Display";

test('contains Balls and Strikes', ()=> {
  const { getByText } = render(<Display />);
  getByText(/balls/i);
  getByText(/strikes/i);
});