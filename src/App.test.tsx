import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

describe('App', () => {
  const locationOriginal = window.location;

  afterEach(() => {
    window.location = locationOriginal;
  })

  test('Should render header link', async () => {
    const spyAssign = jest.fn();
    Object.defineProperty(window, 'location', {
      value: {
        assign: spyAssign
      },
      writable: true,
    });
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByText('🧪 React Testing Workshop');
    expect(linkElement).toBeInTheDocument();

    // Check navbar Films + Breadcrumbs
    const navbarFilms = await screen.findAllByText('Films');
    expect(navbarFilms).toHaveLength(2);

    // Expect first item of films are visible
    expect(await screen.findByText('Castle in the Sky')).toBeVisible();

    // Check navbar People
    // const navbarPeople = await screen.findByText('People');
    // expect(navbarPeople).toBeInTheDocument();

    // userEvent.click(navbarPeople);

    // // Expect first item of people are visible
    // expect(await screen.findByText('Haku')).toBeVisible();

    const toExternal = await screen.findByText('To external');
    userEvent.click(toExternal);
    expect(spyAssign).toHaveBeenCalled()
  });


  test('Should navigate when have callback hash', async () => {
    render(<MemoryRouter initialEntries={["/#callback=true"]}><App /></MemoryRouter>);
    const linkElement = screen.getByText('🧪 React Testing Workshop');
    expect(linkElement).toBeInTheDocument();

    // Check navbar Films + Breadcrumbs
    const navbarFilms = await screen.findAllByText('People');
    expect(navbarFilms).toHaveLength(2);

    // // Expect first item of films are visible
    // expect(await screen.findByText('Castle in the Sky')).toBeVisible();

    // Check navbar People
    // const navbarPeople = await screen.findByText('People');
    // expect(navbarPeople).toBeInTheDocument();

    // userEvent.click(navbarPeople);

    // // Expect first item of people are visible
    // expect(await screen.findByText('Haku')).toBeVisible();

    // const toExternal = await screen.findByText('To external');
    // userEvent.click(toExternal);
    // expect(window.location.href).toBe('https://mazipan.space');
  });
})
