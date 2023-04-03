import { Nunito } from "next/font/google"
import Navbar from "@/app/components/navbar/Navbar"

import ClientOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import "./globals.css"

// import LoginModal from "@/app/components/modals/LoginModal"
// import SearchModal from "@/app/components/modals/SearchModal"
// import RentModal from "@/app/components/modals/RentModal"
// import getCurrentUser from "./actions/getCurrentUser"

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <div>{children}</div>
      </body>
    </html>
  )
}
