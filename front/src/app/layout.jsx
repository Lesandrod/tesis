import "./globals.css";
import Head from "next/head";
export default function RootLayout({ children }) {
  return (
    <html >
      <head >
        <title>Tesis</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap" rel="stylesheet"></link>


      </head>
      <body >
        {children}
      </body>
    </html>
  )
}
