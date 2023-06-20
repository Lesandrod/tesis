import { Navigation } from "@/components/Navigation"
export default function RootLayout({ children }) {
  return (
    <html >
      <head>
        <title>Project</title>
      </head>
      <body >
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
