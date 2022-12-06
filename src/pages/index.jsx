import React from "react"

export default function IndexPage() {
  const {netlifyIdentity} = window
  return <>
    <h1>Hello</h1>
    <button onClick={()=> netlifyIdentity.setLocale('fr')}>Change Lang</button>
    <button onClick={()=> netlifyIdentity.open()}>Click brah</button>
  </>
}