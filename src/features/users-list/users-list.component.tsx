import { useUserList } from './users-list.hook'
import { Layout } from '@components/layout/layout.component'
import { Table } from './table/users-list-table.component'
import { Pagination } from './pagination/users-list-pagination'
import { Filter } from './filter/users-list-filter.component'

export function UsersList() {
  const {
    results,
    page,
    paginationRange,
    keyword,
    gender,
    sort,
    onChangeKeyword,
    onChangeGender,
    onChangePage,
    onResetKeyword,
    onChangeSort,
    onResetFilter,
  } = useUserList()

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-primary-black">
        Web Engineering Test
      </h1>
      <Filter
        gender={gender}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onChangeGender={onChangeGender}
        onResetKeyword={onResetKeyword}
        onResetFilter={onResetFilter}
      />
      <Table users={results} sort={sort} onChangeSort={onChangeSort} />
      <Pagination
        paginationRange={paginationRange}
        currentPage={page}
        onChangePage={onChangePage}
      />
    </Layout>
  )
}
