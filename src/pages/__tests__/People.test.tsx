import { render, screen } from '@testing-library/react';
import People from '../People';
import { BrowserRouter } from 'react-router-dom';

test('Should render people page properly', async () => {
  render(<BrowserRouter><People /></BrowserRouter>);

  // Expect all Breadcrumbs text
  expect(await screen.findByText('Home')).toBeInTheDocument()
  expect(await screen.findByText('People')).toBeInTheDocument()

  // Expect first row of people are visible
  expect(await screen.findByText('Haku')).toBeVisible();
  expect(await screen.findByText('Pazu')).toBeVisible();
  expect(await screen.findByText('Lusheeta Toel Ul Laputa')).toBeVisible();
  expect(await screen.findByText(`Captain Dola`)).toBeVisible();
});
