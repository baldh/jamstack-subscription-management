import React,{createContext} from 'react'

export const SiteContext = createContext()

export default function SiteContextProvider({children}) {
  const [theme, setTheme] = React.useState("light")
  const [netlifyIdentity, setNetlifyIdentity] = React.useState("")
}