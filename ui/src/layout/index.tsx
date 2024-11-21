import { ReactNode } from "react"
import { Navigation } from "../components/ui/Navbar"
import Footer from "../components/ui/Footer"

type IProps = {
    children: ReactNode
  
}

export default function Layout({ children }: IProps) {
  
    return (
      <>
        <Navigation />
        {children}
        <Footer />
      </>
    );
}
