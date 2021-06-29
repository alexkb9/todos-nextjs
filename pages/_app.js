import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("Test")
  return <Component {...pageProps} />
}

export default MyApp
