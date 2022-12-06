import React,{useState, useEffect} from "react"
export default function IndexPage() {
  console.log("Child renders")
  const [netlifyIdentity, setNetlifyIdentity] = useState(undefined)

  useEffect(()=> {
    setNetlifyIdentity(window.netlifyIdentity)
  },[])

  useEffect(()=> {
      if(netlifyIdentity !== undefined) console.log("netlifyIdentity has changed")
  }, [netlifyIdentity])


  if(netlifyIdentity === undefined) return <button>Loading...</button>
  return <button onClick={()=> console.log(netlifyIdentity)}>Log Data</button>
}