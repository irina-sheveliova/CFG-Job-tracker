import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../components/JobApplications/Modal';

describe('Modal component', () => {
  test('populates the form job values', () => {
    const job = {
      position: 'Software Engineer',
      company: 'Credit Suisse',
      doa: '2023-05-23',
      status: 'applied',
      salary: '100000',
      notes: 'test note',
    };

    render(<Modal defaultValue={job} />);

    expect(screen.getByLabelText('Job Position (required)').value).toBe(
      job.position
    );
    expect(screen.getByLabelText('Company (required)').value).toBe(job.company);
    expect(screen.getByLabelText('Status (required)').value).toBe(job.status);
    expect(screen.getByLabelText('Date of Job Application').value).toBe(
      job.doa
    );
    expect(screen.getByLabelText('Salary').value).toBe(job.salary);
    expect(screen.getByLabelText('Notes').value).toBe(job.notes);
  });

  test('is submitting the form when all fields are filled', async () => {
    const closeModal = jest.fn();
    const addJob = jest.fn();

    const job = {
      position: 'Software Engineer',
      company: 'Credit Suisse',
      doa: '2023-05-23',
      status: 'applied',
      salary: '100000',
      notes: 'test note',
    };

    render(<Modal closeModal={closeModal} addJob={addJob} />);

    userEvent.type(
      screen.getByLabelText('Job Position (required)'),
      job.position
    );
    userEvent.type(screen.getByLabelText('Company (required)'), job.company);
    userEvent.selectOptions(screen.getByLabelText('Status (required)'), [
      job.status,
    ]);
    userEvent.type(screen.getByLabelText('Date of Job Application'), job.doa);
    userEvent.type(screen.getByLabelText('Salary'), job.salary);
    userEvent.type(screen.getByLabelText('Notes'), job.notes);

    const enterButton = screen.getByRole('button', { name: /enter/i });
    userEvent.click(enterButton);

    expect(closeModal).toHaveBeenCalledTimes(1);
    expect(addJob).toHaveBeenCalledWith(job);
  });

  test('is not submitting the form when not all required fields are filled', () => {
    const job = {
      position: 'Software Engineer',
      company: '',
      doa: '2023-05-23',
      status: 'applied',
      salary: '100000',
      notes: 'test note',
    };

    render(<Modal defaultValue={job} />);

    userEvent.click(screen.getByRole('button', { name: /Enter/i }));
    const errorMessage = screen.getByText(/please provide: company/i);
    expect(errorMessage).toBeInTheDocument();
  });
  test('it calls closeModal when clicking the close button', async () => {
    const closeModal = jest.fn();

    render(<Modal closeModal={closeModal} />);

    const closeButton = screen.getByTestId('close-button');
    userEvent.click(closeButton);

    expect(closeButton).toBeInTheDocument();
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
