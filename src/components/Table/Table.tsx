import dayjs from 'dayjs'
import cx from 'classnames'

import { ChevronDownSolid, ChevronUpSolid } from '@components/common/Icons'
import { ISort, IUser, TSortBy } from 'src/types/users.type'

interface ITableProps {
  users: IUser[]
  sort: ISort
  onChangeSort: (sort: ISort) => void
}

interface IHeaderList {
  id: number
  label: string
  value: TSortBy | null
  sortable: boolean
}

const headerList: IHeaderList[] = [
  { id: 1, label: 'Name', value: null, sortable: false },
  { id: 2, label: 'Username', value: 'username', sortable: true },
  { id: 3, label: 'Email', value: 'email', sortable: true },
  { id: 4, label: 'Gender', value: 'gender', sortable: true },
  { id: 5, label: 'Registered Date', value: 'registered', sortable: true },
]

export function Table({ users, sort, onChangeSort }: ITableProps): JSX.Element {
  const sortedUsers = users?.sort((a, b): any => {
    if (sort?.sortBy === 'username') {
      return sort?.sortOrder === 'ascend'
        ? a?.login?.username.localeCompare(b?.login?.username)
        : b?.login?.username.localeCompare(a?.login?.username)
    } else if (sort?.sortBy === 'email') {
      return sort?.sortOrder === 'ascend'
        ? a?.email.localeCompare(b?.email)
        : b?.email.localeCompare(a?.email)
    } else if (sort?.sortBy === 'registered') {
      return sort?.sortOrder === 'ascend'
        ? dayjs(a?.registered?.date).diff(dayjs(b?.registered?.date))
        : dayjs(b?.registered?.date).diff(dayjs(a?.registered?.date))
    } else if (sort?.sortBy === 'gender') {
      return sort?.sortOrder === 'ascend'
        ? a?.gender?.localeCompare(b?.gender)
        : b?.gender?.localeCompare(a?.gender)
    }
  })

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-primary-grey">
        <tr className="text-base font-semibold">
          {headerList?.map((header) => {
            return (
              <th
                key={header?.id}
                scope="col"
                className="px-8 py-3 text-left text-primary-black uppercase tracking-wider"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-block">{header?.label}</span>
                  {header?.sortable && (
                    <div className="flex flex-col">
                      <div
                        className={cx(
                          'cursor-pointer',
                          sort?.sortBy === header?.value &&
                            sort?.sortOrder === 'ascend' &&
                            'text-primary-purple'
                        )}
                        onClick={() =>
                          onChangeSort({
                            sortBy: header?.value,
                            sortOrder: 'ascend',
                          })
                        }
                      >
                        <ChevronUpSolid />
                      </div>
                      <div
                        className={cx(
                          'cursor-pointer',
                          sort?.sortBy === header?.value &&
                            sort?.sortOrder === 'descend' &&
                            'text-primary-purple'
                        )}
                        onClick={() =>
                          onChangeSort({
                            sortBy: header?.value,
                            sortOrder: 'descend',
                          })
                        }
                      >
                        <ChevronDownSolid />
                      </div>
                    </div>
                  )}
                </div>
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {sortedUsers?.map((user, index) => {
          return (
            <tr
              key={`${user.name}-${index}`}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="px-8 py-4 whitespace-nowrap text-sm font-medium text-primary-black">
                {user.name.first} {user.name.last}
              </td>
              <td className="px-8 py-4 whitespace-nowrap text-sm text-primary-black">
                {user.login.username}
              </td>
              <td className="px-8 py-4 whitespace-nowrap text-sm text-primary-black">
                {user.email}
              </td>
              <td className="px-8 py-4 whitespace-nowrap text-sm text-primary-black">
                {user.gender}
              </td>
              <td className="px-8 py-4 whitespace-nowrap text-sm">
                {dayjs(new Date(user?.registered?.date)).format(
                  'MMMM D, YYYY h:mm A'
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
