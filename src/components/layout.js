import * as React from "react"
import Header from "@components/header"
import Footer from "@components/footer"
import Head from "@components/head"
import "../styles.css"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header logo={props.logo}/>
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
