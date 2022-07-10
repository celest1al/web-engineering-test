import type { NextPage } from 'next'
import Head from 'next/head'

import { UsersList } from '@features/users-list/users-list.component'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Web Engineering Test</title>
      </Head>
      <UsersList />
    </>
  )
}

export default Home
