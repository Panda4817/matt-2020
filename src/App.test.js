import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 2020 header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Matt's 2020 - A Year To Remember!/i);
  expect(headerElement).toBeInTheDocument();
});
