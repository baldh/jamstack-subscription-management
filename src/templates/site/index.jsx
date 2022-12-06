import React from "react"
import Seo from '../../components/seo'
export default function SiteTemplate({children}) {
  return <>
    <Seo/>
    <main>{children} </main>
  </>
}