import React from "react"
import styled from "styled-components/macro"
import { StaticImage } from "gatsby-plugin-image"

const OrderItem = () => {
  return (
    <ItemWrapper>
      <StaticImage src="../../images/icon-music.svg" alt="music icon" />
      <ItemDetails>
        <ItemTitle>Annual Plan</ItemTitle>
        <ItemText>$59.99/year</ItemText>
      </ItemDetails>
      <ItemLink>Change</ItemLink>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  align-items: center;
  background-color: var(--color-neutral-very-pale-blue);
  border-radius: 10px;
  display: flex;
  font-size: 0.9rem;
  padding: 1rem clamp(1rem, 2vw, 2rem);
  margin: 1rem 0 1.5rem 0;
`

const ItemDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
  text-align: start;
`

const ItemTitle = styled.h2`
  color: var(--color-neutral-dark-blue);
  font-weight: var(--font-weight-bold);
`

const ItemText = styled.p`
  color: var(--color-neutral-desaturated-blue);
  font-weight: var(--font-weight-normal);
`

const ItemLink = styled.a`
  color: var(--color-primary-bright-blue);
  font-weight: var(--font-weight-medium);
  text-decoration: underline;

  &:hover {
    opacity: 0.7;
    text-decoration: unset;
  }
`

export default OrderItem
