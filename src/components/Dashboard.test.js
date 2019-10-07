import React from 'react';
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

test('contains Balls and Strikes', ()=> {
  const { getByText } = render(<Dashboard />);
  getByText(/strike/i);
  getByText(/ball/i);
  getByText(/foul/i);
  getByText(/hit/i);
});