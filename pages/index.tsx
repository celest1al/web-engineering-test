import type { NextPage } from 'next'
import Head from 'next/head'

import { useUserList } from '@hooks/users.hook'

import { Layout } from '@components/Layout'
import { Table } from '@components/Table/Table'
import { Input } from '@components/common/Input'
import { Select } from '@components/common/Select'
import { Pagination } from '@components/Pagination/Pagination'

const options = [
  { id: 1, value: 'all', label: 'All' },
  { id: 2, value: 'male', label: 'Male' },
  { id: 3, value: 'female', label: 'Female' },
]

const Home: NextPage = () => {
  const {
    results,
    page,
    paginationRange,
    keyword,
    gender,
    onChangeKeyword,
    onChangeGender,
    onChangePage,
    onResetKeyword,
    onResetFilter,
  } = useUserList()

  return (
    <>
      <Head>
        <title>Web Engineering Test</title>
      </Head>
      <Layout>
        <h1 className="text-2xl font-semibold text-primary-black">
          Web Engineering Test
        </h1>
        <div className="py-8 flex items-end space-x-4">
          <Input
            id="search-user"
            buttonLabel="Clear"
            label="Search"
            placeholder="Search user"
            value={keyword}
            onChange={onChangeKeyword}
            onClick={onResetKeyword}
          />
          <Select
            id="select-gender"
            label="Gender"
            value={gender}
            options={options}
            onChange={onChangeGender}
          />
          <button
            onClick={onResetFilter}
            className="px-4 py-2 rounded bg-white text-primary-purple text-sm font-semibold border border-primary-purple hover:bg-primary-purple hover:border-primary-purple hover:text-primary-white"
          >
            Clear Filter
          </button>
        </div>
        <Table users={results} />
        <Pagination
          paginationRange={paginationRange}
          currentPage={page}
          onChangePage={onChangePage}
        />
      </Layout>
    </>
  )
}

export default Home
