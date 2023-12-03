// FormPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormPage from './FormPage'; // Import your FormPage component

test('Form submits with correct values', () => {
  // Mock any necessary functions or data if needed

  render(<FormPage />); // Render your FormPage component

  // Simulate user input
  fireEvent.change(screen.getByTestId('input_file_path'), { target: { value: 'file/path' } });
  fireEvent.change(screen.getByTestId('platform'), { target: { value: 'somePlatform' } });
  fireEvent.change(screen.getByTestId('repo_clone_url'), { target: { value: 'https://github.com/example/repo.git' } });
  fireEvent.change(screen.getByTestId('branch'), { target: { value: 'main' } });
  fireEvent.change(screen.getByTestId('eks_terraform_repo'), { target: { value: 'https://github.com/example/eks-terraform.git' } });
  fireEvent.change(screen.getByTestId('eks_terraform_branch'), { target: { value: 'master' } });

  // Trigger form submission
  fireEvent.submit(screen.getByTestId('your-form-id')); // Replace 'your-form-id' with the actual ID of your form

  // Add assertions based on your form submission logic
  // For example, you can check if a callback function is called, if a loading state is set, etc.
});
