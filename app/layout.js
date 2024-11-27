import './global.css'

import { unboundedLight } from './fonts'

import Header from "../components/HeaderM"
import Footer from '../components/Footer'




export const metadata = {
  title: 'RADIIA',
  description: 'Радія - сучіасні рішення енергетики',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${unboundedLight.className} min-h-screen flex flex-col`} >
      < Header />
      <div className='mb-auto'>{children}</div>
      <Footer />
      </body>
    </html>
  )
}
