import { CreditCard } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { PaymentTypeContainer } from './styles'

interface IPaymentType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  selectedPaymentType: string
  paymentType: string
}

export function PaymentType({
  title,
  selectedPaymentType,
  paymentType,
  ...rest
}: IPaymentType) {
  return (
    <PaymentTypeContainer {...rest}>
      <span className={selectedPaymentType === paymentType ? 'selected' : ''}>
        <CreditCard />
        <p>{title}</p>
      </span>
    </PaymentTypeContainer>
  )
}
