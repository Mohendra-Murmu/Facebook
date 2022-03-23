import Head from 'next/head'
import Header from '../components/Header'
import { getSession } from "next-auth/react"
import Login from '../components/Login'
export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook Connect with friends, family and other people you know. Share photos and videos, send messages and get updates." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/**Header */}
      <Header />

      <main>

        {/**Sidebar */}

        {/**Feed */}

        {/**Widgets */}
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