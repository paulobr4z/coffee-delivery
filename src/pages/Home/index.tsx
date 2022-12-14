import { Card } from '../../components/Card'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeContent, HomeContainer, MainContent } from './styles'
import coffee from './../../coffee.json'

export function Home() {
  return (
    <HomeContainer>
      <MainContent>
        <div className="main-text">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="main-descriptions">
            <span>
              <div className="main-descriptions-icons">
                <ShoppingCart size={16} weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </span>
            <span>
              <div className="main-descriptions-icons">
                <Package size={16} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <div className="main-descriptions-icons">
                <Timer size={16} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <div className="main-descriptions-icons">
                <Coffee size={16} weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </div>
        <div className="main-image">
          <img src="/images/main-coffee.png" alt="coffee" />
        </div>
      </MainContent>
      <CoffeeContent>
        <h2>Nossos cafés</h2>
        <main>
          {coffee.map((item) => (
            <Card key={item.id} coffee={item} />
          ))}
        </main>
      </CoffeeContent>
    </HomeContainer>
  )
}
