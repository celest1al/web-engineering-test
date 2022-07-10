export type TGender = 'all' | 'male' | 'female'
export type TSortOrder = 'ascend' | 'descend'
export type TSortBy = 'username' | 'email' | 'gender' | 'registered'

export type ISort = {
  sortBy: null | TSortBy
  sortOrder: null | TSortOrder
}
export interface IUser {
  email: string
  gender: TGender
  login: {
    md5: string
    password: string
    salt: string
    sha1: string
    sha256: string
    username: string
    uuid: string
  }
  name: {
    first: string
    last: string
    title: string
  }
  registered: {
    age: number
    date: string
  }
}
