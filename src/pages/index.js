import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import App from "../components/App"
import GlobalStyles from "../components/GlobalStyles"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <App />

    <Attribution>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by Raffaella using Gatsby and Styled Components.
    </Attribution>
  </>
)

const Attribution = styled.p`
  text-align: center;
  padding: 1rem;
`

export default IndexPage
