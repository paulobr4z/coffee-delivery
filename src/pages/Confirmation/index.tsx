import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { ConfirmationContainer } from './styles'

export function Confirmation() {
  return (
    <ConfirmationContainer>
      <div className="wrapper">
        <div className="confirmation-header">
          <h3>Uhu! Pedido confirmado</h3>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <main>
          <div className="delivery-info">
            <div className="delivery-description">
              <div className="map">
                <MapPin weight="fill" />
              </div>
              <span>
                <p>Entrega em</p>
                <strong>Ala D Quadra 12, N 42 Cohab</strong>
              </span>
            </div>
            <div className="delivery-description">
              <div className="clock">
                <Clock weight="fill" />
              </div>
              <span>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
            <div className="delivery-description">
              <div className="dollar">
                <CurrencyDollar weight="fill" />
              </div>
              <span>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </div>
          <img src="/images/motorcycle.png" alt="motorcycle" />
        </main>
      </div>
    </ConfirmationContainer>
  )
}
