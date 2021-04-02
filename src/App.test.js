import { render, screen } from '@testing-library/react';
import App from './App';

test('Navbar has the appropriate text', () => {
  render(<App />);
  let linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = screen.getByText(/Cats/i);
  expect(linkElement).toBeInTheDocument();
});
