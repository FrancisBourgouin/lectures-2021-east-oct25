import { render, screen, prettyDOM } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { debug, container } = render(<App />);
  console.log(prettyDOM(container))
  // expect(linkElement).toBeInTheDocument();
});
