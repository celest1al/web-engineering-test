export type TSortOrder = 'ascend' | 'descend'
export type TSortBy = 'username' | 'email' | 'gender' | 'registered'

export interface ISort {
  sortBy: null | TSortBy
  sortOrder: null | TSortOrder
}

export interface IHeaderList {
  id: number
  label: string
  value: TSortBy | null
  sortable: boolean
}
