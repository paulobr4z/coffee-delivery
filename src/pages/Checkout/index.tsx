import { CurrencyDollar, MapPinLine, Minus, Plus, Trash } from 'phosphor-react'
import {
  CheckoutContainer,
  DeliveryAaddress,
  Payment,
  SelectedCoffees,
} from './styles'
import { FormEvent, useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PaymentType } from '../../components/PaymentType'

interface Ilocation {
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  numero: string
}

export function Checkout() {
  const [cep, setCep] = useState('')
  const [location, setLocation] = useState<Ilocation>()
  const [selectedPaymentType, setSelectedPaymentType] = useState('')

  async function handleLocationByCep(e: FormEvent) {
    e.preventDefault()

    if (cep.length < 2) return

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const { logradouro, complemento, numero, bairro, localidade, uf } =
        await response.json()
      setLocation({
        logradouro,
        complemento,
        numero,
        bairro,
        localidade,
        uf,
      })
    } catch (error) {
      toast.error('CEP inválido ou inexistente!')
    }
  }

  return (
    <CheckoutContainer>
      <ToastContainer />
      <div className="wrapper">
        <div className="left-content">
          <DeliveryAaddress>
            <h4>Complete seu pedido</h4>
            <form>
              <div className="form-header">
                <MapPinLine size={24} />
                <span>
                  <strong>Endereço de Entrega</strong>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </span>
              </div>
              <div className="form-content">
                <div className="get-cep">
                  <input
                    type="text"
                    placeholder="CEP"
                    onChange={(e) => setCep(e.target.value)}
                  />
                  <button onClick={handleLocationByCep}>buscar</button>
                </div>
                <input
                  type="text"
                  placeholder="Rua"
                  defaultValue={location?.logradouro}
                />
                <div className="number-complement">
                  <input
                    type="text"
                    placeholder="Número"
                    defaultValue={location?.numero}
                  />
                  <input
                    type="text"
                    placeholder="Complemento"
                    defaultValue={location?.complemento}
                  />
                </div>
                <div className="district-city">
                  <input
                    type="text"
                    placeholder="Bairro"
                    defaultValue={location?.bairro}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    defaultValue={location?.localidade}
                  />
                  <input
                    type="text"
                    placeholder="UF"
                    defaultValue={location?.uf}
                  />
                </div>
              </div>
            </form>
          </DeliveryAaddress>
          <Payment>
            <div className="payment-header">
              <CurrencyDollar size={24} />
              <span>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </span>
            </div>
            <div className="payment-type">
              <PaymentType
                title="Cartão de crédito"
                paymentType="credit"
                selectedPaymentType={selectedPaymentType}
                onClick={() => setSelectedPaymentType('credit')}
              />
              <PaymentType
                title="cartão de débito"
                paymentType="debit"
                selectedPaymentType={selectedPaymentType}
                onClick={() => setSelectedPaymentType('debit')}
              />
              <PaymentType
                title="Dinheiro"
                paymentType="money"
                selectedPaymentType={selectedPaymentType}
                onClick={() => setSelectedPaymentType('money')}
              />
            </div>
          </Payment>
        </div>

        <SelectedCoffees>
          <h4>Complete seu pedido</h4>
          <div className="wrapper">
            <div className="order-item">
              <img src="images/coffee/expresso-tradicional.png" alt="" />
              <div className="main-content">
                <div className="description">
                  <p>Expresso Tradicional</p>
                  <strong>R$ 9,90</strong>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <Minus size={16} />
                    <p>0</p>
                    <Plus size={16} />
                  </div>
                  <div className="remove">
                    <Trash size={16} />
                    <p>REMOVER</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-item">
              <img src="images/coffee/expresso-tradicional.png" alt="" />
              <div className="main-content">
                <div className="description">
                  <p>Expresso Tradicional</p>
                  <strong>R$ 9,90</strong>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <Minus size={16} />
                    <p>0</p>
                    <Plus size={16} />
                  </div>
                  <div className="remove">
                    <Trash size={16} />
                    <p>REMOVER</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="total">
              <span>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </span>
              <span>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </span>
              <span>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </span>
            </div>
            <button className="confirm-order">CONFIRMAR PEDIDO</button>
          </div>
        </SelectedCoffees>
      </div>
    </CheckoutContainer>
  )
}
