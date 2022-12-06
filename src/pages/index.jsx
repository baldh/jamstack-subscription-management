import React from "react"

const isBrowser = typeof window !== "undefined"
export default function IndexPage() {
  let netlifyIdentity = undefined
  if(isBrowser) {
    netlifyIdentity = window.netlifyIdentity
  }
  return <>
    <button onClick={() => netlifyIdentity.open()}>Login</button>
    <p>Build something</p>
  </>
}