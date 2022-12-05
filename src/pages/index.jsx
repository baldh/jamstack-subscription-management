import React from "react"
import {IdentityModal, useIdentityContext} from 'react-netlify-identity-widget'
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

export default function IndexPage() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  return <>
    {identity && identity.isLoggedIn && (
      <pre>{JSON.stringify(identity,null,2)}</pre>
    )}
    <h1>Sign up for content</h1>
    <p>We have the best content on the internet</p>
    {!dialog && <button onClick={()=> setDialog(true)}>Log In</button>}
    <IdentityModal
      showDialog={dialog}
      onCloseDialog={()=> setDialog(false)}
      onLogin={(user)=> console.log('Hello ', user?.user_metadata)}
      onSignup={(user)=> console.log('welcome', user?.user_metadata)}
      onLogout={()=> console.log('bye ')}
    />
  </>
}