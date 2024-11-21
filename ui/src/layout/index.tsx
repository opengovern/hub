import { ReactNode } from "react"
import { Navigation } from "../components/ui/Navbar"
import Footer from "../components/ui/Footer"

type IProps = {
    children: ReactNode
  
}

export default function Layout({ children }: IProps) {
  
    return (
      <div className="min-h-screen scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950">
        <Navigation />
        {children}
        <Footer />
      </div>
    );
}
