import { render, screen } from '@testing-library/react';
import Films from '../Films';
import { BrowserRouter } from 'react-router-dom';

test('Should render film page properly', async () => {
  render(<BrowserRouter><Films /></BrowserRouter>);

  // Expect all Breadcrumbs text
  expect(await screen.findByText('Home')).toBeInTheDocument()
  expect(await screen.findByText('Films')).toBeInTheDocument()

  // Expect first row of films are visible
  expect(await screen.findByText('Castle in the Sky')).toBeVisible();
  expect(await screen.findByText('Grave of the Fireflies')).toBeVisible();
  expect(await screen.findByText('My Neighbor Totoro')).toBeVisible();
  expect(await screen.findByText(`Kiki's Delivery Service`)).toBeVisible();
});
