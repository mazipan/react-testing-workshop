// src/mocks/handlers.js
import { rest } from 'msw';
import { API_URL_FILMS, API_URL_PEOPLE, BASE_API_URL } from '../constants/url';

import MockFilmResponse from './response/films';
import MockPeopleResponse from './response/people';

export const handlers = [
  rest.get(`${BASE_API_URL}${API_URL_FILMS}`, (req, res, ctx) => {
    console.debug(`[MSW]: mock ${BASE_API_URL}${API_URL_FILMS}`)
    return res(ctx.json(MockFilmResponse))
  }),
  rest.get(`${BASE_API_URL}${API_URL_PEOPLE}`, (req, res, ctx) => {
    console.debug(`[MSW]: mock ${BASE_API_URL}${API_URL_PEOPLE}`)
    return res(ctx.json(MockPeopleResponse))
  }),
]