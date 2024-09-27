// This is the root layout component for your Next.js app.
import './styles.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">  {/* You can remove 'font-sans' if you want the browser's default font */}
        {children}
      </body>
    </html>
  )
}
