// PricingPage.test.js

import React from 'react';
import { render } from '@testing-library/react';
import PricingPage from './PricingPage';

test('renders company name', () => {
  const { getByText } = render(<PricingPage />);
  const companyNameElement = getByText(/Company name/i);
  expect(companyNameElement).toBeInTheDocument();
});

test('renders pricing cards with basic information', () => {
  const { getByText } = render(<PricingPage />);

  // Test information for Free plan
  expect(getByText(/Free/i)).toBeInTheDocument();
  expect(getByText(/10 users included/i)).toBeInTheDocument();
  expect(getByText(/2 GB of storage/i)).toBeInTheDocument();

  // Test information for Pro plan
  expect(getByText(/Pro/i)).toBeInTheDocument();
  expect(getByText(/20 users included/i)).toBeInTheDocument();
  expect(getByText(/10 GB of storage/i)).toBeInTheDocument();

  // Test information for Enterprise plan
  expect(getByText(/Enterprise/i)).toBeInTheDocument();
  expect(getByText(/30 users included/i)).toBeInTheDocument();
  expect(getByText(/15 GB of storage/i)).toBeInTheDocument();
});

test('renders the footer with copyright information', () => {
  const { getByText } = render(<PricingPage />);
  const copyrightElement = getByText(/&copy; 2017-2018/i);
  expect(copyrightElement).toBeInTheDocument();
});
