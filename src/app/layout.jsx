"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/footer/Footer'
import GlobalState from '../authContext'
import Navbar from '../components/navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <GlobalState>
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div> 
        </GlobalState>
      </body>


    </html>
  )
}
