import React from "react"
import styled from "styled-components/macro"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../Button"
import OrderItem from "../OrderItem"

const OrderSummaryCard = () => {
  return (
    <CardWrapper>
      <StaticImage
        src="../../images/illustration-hero.svg"
        alt="hero"
        imgStyle={{ width: "100%" }}
        objectFit="cover"
      />
      <CardBody>
        <Title>Order Summary</Title>
        <Text>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </Text>

        <OrderItem />

        <Button />
        <CancelLink>Cancel Order</CancelLink>
      </CardBody>
    </CardWrapper>
  )
}

const CardWrapper = styled.article`
  border-radius: 20px;
  box-shadow: 0 0.3rem 2rem -0.6rem var(--color-primary-bright-blue-shadow);
  margin: 0 auto;
  max-width: clamp(calc(340 / 16 * 1rem), 30vw, calc(450 / 16 * 1rem));
  overflow: hidden;
  text-align: center;
`

const CardBody = styled.div`
  background-color: var(--color-white);
  padding: 2rem clamp(1.5rem, 2vw, 2.5rem);
`

const Title = styled.h2`
  color: var(--color-neutral-dark-blue);
  font-weight: var(--font-weight-bold);
  font-size: 1.5rem;
`

const Text = styled.p`
  color: var(--color-neutral-desaturated-blue);
  font-size: 1rem;
  font-weight: var(--font-weight-normal);
  padding: 1rem 1.5rem;
`

const CancelLink = styled.a`
  color: var(--color-neutral-desaturated-blue);
  display: inline-block;
  font-weight: var(--font-weight-bold);
  margin-top: 1.5rem;

  &:hover {
    color: var(--color-neutral-dark-blue);
  }
`

export default OrderSummaryCard
