import "./globals.css";
import Head from "next/head";
export default function RootLayout({ children }) {
  return (
    <html >
      <Head>
        <title>Tesis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body >      
        {children}
      </body>
    </html>
  )
}
