// FormPage.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import FormPage from './FormPage'; // Import your actual FormPage component

describe('FormPage', () => {
  it('should handle form submission', () => {
    render(<FormPage />); // Render your FormPage component

    // Mock data for testing
    const formData = {
      input_file_path: 'example_path',
      platform: 'example_platform',
      repo_clone_url: 'https://github.com/example/repo.git',
      branch: 'main',
      eks_terraform_repo: 'https://github.com/example/eks-terraform.git',
      eks_terraform_branch: 'master',
    };

    // Iterate over the formData and populate the corresponding input fields
    Object.entries(formData).forEach(([key, value]) => {
      const inputElement = screen.getByTestId(`input_${key}`);
      fireEvent.change(inputElement, { target: { value } });
    });

    // Trigger form submission
    const submitButton = screen.getByText('Submit'); // Adjust this based on your actual submit button text
    fireEvent.click(submitButton);

    // Add assertions based on your expected behavior after form submission
    // For example, you might check for the presence of a success message

    // For demonstration purposes, let's check if a success message is present
    const successMessage = screen.getByTestId('success-message');
    expect(successMessage).toBeInTheDocument();
  });
});
