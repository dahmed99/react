import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PricingPage from './PricingPage'; // Update the path based on your project structure

describe('PricingPage component', () => {
  test('renders input fields', () => {
    render(<PricingPage />);
    
    // Check if input fields are rendered
    expect(screen.getByLabelText(/Input File Path/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Platform/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Code Repo URL/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Branch', { selector: '#branch' })).toBeInTheDocument();
    expect(screen.getByLabelText(/Terraform Repo URL/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Terraform Branch/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Token/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Jira Ticket/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/S3 Upload/i)).toBeInTheDocument();
  });

  test('submits form with correct data', async () => {
    render(<PricingPage />);

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({});

    // Fill in form data
    fireEvent.change(screen.getByLabelText(/Input File Path/i), { target: { value: 'test-file-path' } });
    fireEvent.change(screen.getByLabelText(/Platform/i), { target: { value: 'ECS' } });
    fireEvent.change(screen.getByLabelText(/Code Repo URL/i), { target: { value: 'test-repo-url' } });
    fireEvent.change(screen.getByLabelText('Branch', { selector: '#branch' }), { target: { value: 'test-branch' } });
    fireEvent.change(screen.getByLabelText(/Terraform Repo URL/i), { target: { value: 'test-tf-repo-url' } });
    fireEvent.change(screen.getByLabelText(/Terraform Branch/i), { target: { value: 'test-tf-branch' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'test-username' } });
    fireEvent.change(screen.getByLabelText(/Token/i), { target: { value: 'test-token' } });
    fireEvent.change(screen.getByLabelText(/Author/i), { target: { value: 'test-author' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@email.com' } });
    fireEvent.change(screen.getByLabelText(/Jira Ticket/i), { target: { value: 'JIRA-1234' } });
    fireEvent.change(screen.getByLabelText(/S3 Upload/i), { target: { value: 'false' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Submit/i));

    // Wait for the fetch function to be called
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    // Check if fetch was called with the correct data
    expect(global.fetch).toHaveBeenCalledWith('https://test.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputFilePath: 'test-file-path',
        platform: 'ECS',
        repoCloneUrl: 'test-repo-url',
        branch: 'test-branch',
        eksTerraformRepo: 'test-tf-repo-url',
        eksTerraformBranch: 'test-tf-branch',
        username: 'test-username',
        token: 'test-token',
        author: 'test-author',
        emailAddress: 'test@email.com',
        jiraTicket: 'JIRA-1234',
        s3Upload: 'false',
      }),
    });
  });
});
