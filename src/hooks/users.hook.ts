import { useQuery } from 'react-query'
import { useState } from 'react'

import { Gender } from 'src/types/users.type'
import { getRandomUsers } from '@utils/users.util'
import { usePagination, useDebounce } from './common.hook'

interface IUseRandomUserProps {
  page: number
  keyword: string
  gender: Gender
}

export function useRandomUser({ page, keyword, gender }: IUseRandomUserProps) {
  return useQuery(
    ['random-users', { page, keyword, gender }],
    () => getRandomUsers({ page, filters: { gender, keyword } }),
    { keepPreviousData: true, staleTime: 5 * 60 * 1000 }
  )
}

export function useUserList() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('')
  const [gender, setGender] = useState<Gender>('all')
  const delayedKeyword = useDebounce({ value: keyword, delay: 500 })
  const { data } = useRandomUser({
    page: page,
    keyword: delayedKeyword,
    gender: gender,
  })
  const paginationRange = usePagination({
    currentPage: page,
  })

  const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event?.target?.value)
  }

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event?.target?.value as Gender)
  }

  const onResetKeyword = () => {
    setKeyword('')
  }

  const onResetFilter = () => {
    setKeyword('')
    setGender('all')
  }

  const onChangePage = (page: number) => {
    setPage(page)
  }

  return {
    page,
    keyword,
    gender,
    results: data?.results,
    paginationRange,
    onChangeKeyword,
    onChangeGender,
    onResetFilter,
    onResetKeyword,
    onChangePage
  }
}
