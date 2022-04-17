import useSWR from 'swr'

import { API_URL_FILMS, BASE_API_URL } from '../constants/url'
import { fetcher } from '../helpers/fetcher'

export interface Film {
  id: string
  title: string
  original_title: string
  original_title_romanised: string
  image: string
  movie_banner: string
  description: string
  director: string
  producer: string
  release_date: string
  running_time: string
  rt_score: string
  people: string[]
  species: string[]
  locations: string[]
  vehicles: string[]
  url: string
}

const useFilmData = () => {
  const { data, error } = useSWR<Film[], unknown>(`${BASE_API_URL}${API_URL_FILMS}`, fetcher)
  const isLoading = !error && !data

  return {
    data: data,
    isLoading,
    isError: !isLoading && Boolean(error)
  }
}

export default useFilmData
