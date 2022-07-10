export type TGender = 'all' | 'male' | 'female'

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
