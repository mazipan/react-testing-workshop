import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

test('Should render header link', async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText('🧪 React Testing Workshop');
  expect(linkElement).toBeInTheDocument();

  // Check navbar Films + Breadcrumbs
  const navbarFilms = await screen.findAllByText('Films');
  expect(navbarFilms).toHaveLength(2);

  // Expect first item of films are visible
  expect(await screen.findByText('Castle in the Sky')).toBeVisible();

  // Check navbar People
  const navbarPeople = await screen.findByText('People');
  expect(navbarPeople).toBeInTheDocument();

  userEvent.click(navbarPeople);

  // Expect first item of people are visible
  expect(await screen.findByText('Haku')).toBeVisible();
});
