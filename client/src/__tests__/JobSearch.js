import { render } from '@testing-library/react';
import Search from '../components/JobSearch/search';

test('Renders "Search for Jobs" page', () => {
  render(<Search />);
});
