import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
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
