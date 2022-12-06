import React from "react"
import SiteTemplate from './src/templates/site'

export const wrapPageElement = ({element, props}) => (
  <SiteTemplate {...props}>{element}</SiteTemplate>
)

