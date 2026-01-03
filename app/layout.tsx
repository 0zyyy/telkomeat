import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "TEat - Login",
  description: "TEat Food Delivery Authentication",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
