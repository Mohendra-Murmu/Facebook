import Head from 'next/head'
import Header from '../components/Header'
import { getSession } from "next-auth/react"
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
export default function Home({ session }) {
  console.log({ session })
  if (!session) return <Login />;
  if (session)
    return (
      <div>
        <Head>
          <title>Facebook</title>
          <meta name="description" content="Facebook Connect with friends, family and other people you know. Share photos and videos, send messages and get updates." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/**Header */}
        <Header />

        <main className='flex bg-gray-100'>

          {/**Sidebar */}
          <Sidebar />
          {/**Feed */}
          <Feed />

          {/**Widgets */}
          <Widgets />
        </main>

      </div>
    )
}


export async function getServerSideProps(context) {
  //Get the User
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}