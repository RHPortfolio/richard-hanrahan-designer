import * as React from "react"
import Navbar from '@components/navbar.js'

export default function Header({logo}) {

  return (
    <header>
      <Navbar logo={logo} />
    </header>
  )
}
