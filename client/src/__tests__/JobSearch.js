import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import axios from 'axios';
import Search from '../components/JobSearch/search';

jest.mock('axios');

describe('Search component', () => {
  test('Renders "Search for Jobs" page', () => {
    render(<Search />);
  });
  test('performs search correctly', async () => {
    axios.get.mockResolvedValueOnce();

    render(<Search />);

    const searchInput = screen.getByPlaceholderText(
      'Please Enter The Desired Job Title and Location e.g. Software Engineer in London'
    );
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, {
      target: { value: 'Software Engineer in London' },
    });
    fireEvent.click(searchButton);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsearch.p.rapidapi.com/search',
      expect.any(Object)
    );
  });
});
