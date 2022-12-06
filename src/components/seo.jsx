import React from "react"
import {Helmet} from 'react-helmet'

export default function Seo() {
  return (
    <Helmet>
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Helmet>
  )
}