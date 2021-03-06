import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export async function getServerSideProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const jsonData = await response.json();

  return {
    props: {
      posts: jsonData
    }
  }
}

export default function Posts({posts}) {
console.log(posts)

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {posts && posts.map((s) => (
              <Link
                  key={s.id}
                  href={{ pathname: `/posts/${s.id}` }}
                  as={`/posts/${s.id}`}
              >
                <a className={styles.card}>
                  <h2>{s.title} &rarr;</h2>
                  <p>{s.body}</p>
                </a>
              </Link>

          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
