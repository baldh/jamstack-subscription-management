import React,{useEffect} from "react"

export default function SiteTemplate({children}) {
  useEffect(()=> {
    const script = document.createElement("script")

    script.type = "text/javascript"
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"

    document.head.appendChild(script)
  },[])
  return <>
    <main>{children}</main>
  </>
}