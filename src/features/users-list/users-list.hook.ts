import { useQuery } from 'react-query'
import { useState } from 'react'

import { TGender } from './users-list.type'
import { ISort } from './table/users-list-table.type'
import { getRandomUsers } from './users-list.util'
import { usePagination } from './pagination/users-list-pagination.hook'
import { useDebounce } from '@hooks/use-debounce/use-debounce.hook'

interface IUseRandomUserProps {
  page: number
  keyword: string
  gender: TGender
  sort: ISort
}

export function useRandomUser({
  page,
  keyword,
  gender,
  sort,
}: IUseRandomUserProps) {
  return useQuery(
    [
      'random-users',
      {
        page,
        keyword,
        gender,
      },
    ],
    () => getRandomUsers({ page, filters: { gender, keyword } }),
    { keepPreviousData: true, staleTime: 5 * 60 * 1000 }
  )
}

export function useUserList() {
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState('')
  const [gender, setGender] = useState<TGender>('all')
  const [sort, setSort] = useState<ISort>({
    sortOrder: null,
    sortBy: null,
  })
  const delayedKeyword = useDebounce({ value: keyword, delay: 500 })
  const { data } = useRandomUser({
    page: page,
    keyword: delayedKeyword,
    gender: gender,
    sort,
  })
  const paginationRange = usePagination({
    currentPage: page,
  })

  const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event?.target?.value)
  }

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event?.target?.value as TGender)
  }

  const onChangeSort = (sort: ISort) => {
    setSort((prevState) => ({
      ...prevState,
      sortBy: sort.sortBy,
      sortOrder: sort.sortOrder,
    }))
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
    sort,
    results: data?.results,
    paginationRange,
    onChangeKeyword,
    onChangeGender,
    onChangeSort,
    onResetFilter,
    onResetKeyword,
    onChangePage,
  }
}
