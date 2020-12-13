import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 2020 header', () => {
  render(<App />);
  const headerElement = screen.getByText(/2020/i);
  expect(headerElement).toBeInTheDocument();
});
