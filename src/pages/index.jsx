import React,{useState, useEffect} from "react"
export default function IndexPage() {
  const [netlifyIdentity, setNetlifyIdentity] = useState(undefined)

  useEffect(()=> {
    setNetlifyIdentity(window.netlifyIdentity)
  },[])

  if(!netlifyIdentity) return <button>Loading...</button>
  return <button onClick={()=> netlifyIdentity.open()}>Sign-In</button>
}