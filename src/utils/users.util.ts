import qs from 'query-string'
import { Gender } from 'src/types/users.type'

interface IGetRandomUsers {
  page: number
  results?: number
  filters: {
    gender: Gender
    keyword: string
  }
}

export async function getRandomUsers({
  page = 1,
  results = 10,
  filters,
}: IGetRandomUsers) {
  const url = qs.stringifyUrl({
    url: 'https://randomuser.me/api/',
    query: {
      page,
      results,
      nat: 'us,gb',
      inc: 'login,name,email,gender,registered',
      gender: filters?.gender,
      ...(filters?.keyword && { keyword: filters?.keyword }),
    },
  })

  const response = await fetch(url)
  const data = await response.json()

  return data
}
