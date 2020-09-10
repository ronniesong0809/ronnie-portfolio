import React from 'react'
import { createGlobalStyle } from 'styled-components'
import SEO from '../components/SEO'

const IframeStyle = createGlobalStyle`
iframe {
  border:0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute
}
`

const Resume = () => (
  <>
    <SEO />
    <IframeStyle />
    <iframe
      title="Ronnie's Resume"
      src="https://drive.google.com/file/d/1lZZPXglC0sSRVt5HGka_F6IPWwnN-6PW/preview?usp=embed_googleplus"
      allowFullScreen
    />
  </>
)

export default Resume
