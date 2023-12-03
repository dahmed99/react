// FormPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormPage from './FormPage'; // Make sure to import your actual FormPage component

test('submitting the form with valid data', () => {
  render(<FormPage />);

  // Fill in the form fields
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: 'test@example.com' },
  });

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'password123' },
  });

  fireEvent.click(screen.getByLabelText(/check me out/i));

  // Submit the form
  fireEvent.click(screen.getByText(/submit/i));

  // Assert that the form has been submitted successfully or handle the success case
  // For example, you can assert that a success message is displayed on the page
  expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
});

// You can add more tests for different scenarios (e.g., invalid data, form validation, etc.)