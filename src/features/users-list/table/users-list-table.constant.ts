import { IHeaderList } from './users-list-table.type'

export const headerList: IHeaderList[] = [
  { id: 1, label: 'Name', value: null, sortable: false },
  { id: 2, label: 'Username', value: 'username', sortable: true },
  { id: 3, label: 'Email', value: 'email', sortable: true },
  { id: 4, label: 'Gender', value: 'gender', sortable: true },
  { id: 5, label: 'Registered Date', value: 'registered', sortable: true },
]
