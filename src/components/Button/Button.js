import React from "react"
import styled from "styled-components/macro"

const Button = () => {
  return <Wrapper>Proceed to Payment</Wrapper>
}

const Wrapper = styled.button`
  border-radius: 12px;
  border: none;
  display: block;
  width: 100%;
  padding: 0.8em;
  font-size: 1rem;
  background-color: var(--color-primary-bright-blue);
  color: var(--color-white);
  font-weight: var(--font-weight-medium);
  box-shadow: 0 1rem 2rem -0.4rem var(--color-primary-bright-blue-shadow);

  &:hover {
      opacity: 0.7;
  }
`

export default Button
