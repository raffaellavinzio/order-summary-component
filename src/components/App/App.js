import React from "react"
import styled from "styled-components/macro"

// CC-in-JS path is not available in runtime
import ImgBgMobile from '../../images/pattern-background-mobile.svg'
import ImgBgDesktop from '../../images/pattern-background-desktop.svg'

import OrderSummaryCard from "../OrderSummaryCard"

const App = () => {
  return (
    <Main>
      <OrderSummaryCard />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 3.5rem);
  background: var(--color-primary-pale-blue) url(${ImgBgMobile}) no-repeat;
  background-size: 100% 50%;

  @media (max-width: 768px) {
    background-image: url(${ImgBgDesktop});
  }
`

export default App
