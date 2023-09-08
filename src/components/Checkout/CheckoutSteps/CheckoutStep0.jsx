import { Cart } from 'components/Cart/Cart'
import React from 'react'

export const CheckoutStep0 = ({onNext}) => {
  return (
    <Cart onNext={onNext}/>
  )
}
