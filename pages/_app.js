import stylesheet from 'styles/main.scss'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Starter</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp