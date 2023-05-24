import { render, screen } from '@testing-library/react';
import JobsIndex from '../components/JobApplications/JobsIndex';
import userEvent from '@testing-library/user-event';
import { FirebaseContext } from '../context/authContext';
// import Modal from './Modal';

const currentUser = {
  email: 'user@test.com',
  password: 'testPassword',
};

describe('JobsIndex component', () => {
  test('is rendering the "Add a Job" button', () => {
    render(
      <FirebaseContext.Provider value={{ currentUser: currentUser }}>
        <JobsIndex />
      </FirebaseContext.Provider>
    );

    const addAJobButton = screen.getByText('Add a Job');
    expect(addAJobButton).toBeInTheDocument();
  });

  test('is rendering the Modal after clicking "Add a Job" button', async () => {
    render(
      <FirebaseContext.Provider value={{ currentUser: currentUser }}>
        <JobsIndex />
      </FirebaseContext.Provider>
    );

    const addAJobButton = screen.getByText('Add a Job');
    userEvent.click(addAJobButton);

    const outputModal = await screen.findByText('Job Position');
    expect(outputModal).toBeInTheDocument();
  });

  //   test('is showing a Welcome message with the current user', () => {
  //     const welcomeElement = screen.getByText(/Welcome user@test.com/i);
  //     expect(welcomeElement).toBeInTheDocument();
  //   });

  //   test('is rendering the row with job details updated in the Modal', () => {});
});
