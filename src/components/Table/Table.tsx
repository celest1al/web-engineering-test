import dayjs from 'dayjs'
import { IUser } from 'src/types/users.type'

interface ITableProps {
  users: IUser[]
}

export function Table({ users }: ITableProps): JSX.Element {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-primary-grey">
        <tr className="text-base font-semibold">
          <th
            scope="col"
            className="px-8 py-3 text-left text-primary-black uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-8 py-3 text-left text-primary-black uppercase tracking-wider"
          >
            Username
          </th>
          <th
            scope="col"
            className="px-8 py-3 text-left text-primary-black uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-8 py-3 text-left text-primary-black uppercase tracking-wider"
          >
            Gender
          </th>
          <th
            scope="col"
            className="px-8 py-3 text-left text-primary-black uppercase tracking-wider"
          >
            Registered Date
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => (
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
        ))}
      </tbody>
    </table>
  )
}
