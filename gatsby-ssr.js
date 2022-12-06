import React from "react"
import {IdentityContextProvider} from "react-netlify-identity-widget"

export const wrapRootElement = ({element}) => {
  return (
    <IdentityContextProvider
      url={"https://baldh-jamstack-subscription.netlify.app/.netlify/identity"}>{element}</IdentityContextProvider>
  )
}