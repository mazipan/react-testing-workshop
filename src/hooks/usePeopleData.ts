import useSWR from 'swr'

import { API_URL_PEOPLE, BASE_API_URL } from '../constants/url'
import { fetcher } from '../helpers/fetcher'

export interface Person {
  id: string
  name: string
  gender?: string
  age: string
  eye_color: string
  hair_color: string
  films: string[]
  species: string
  url: string
  gander?: string
}


const usePeopleData = () => {
  const { data, error } = useSWR<Person[], unknown>(`${BASE_API_URL}${API_URL_PEOPLE}`, fetcher)
  const isLoading = !error && !data

  return {
    data: data,
    isLoading,
    isError: !isLoading && Boolean(error)
  }
}

export default usePeopleData
