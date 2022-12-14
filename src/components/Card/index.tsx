import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../utils'
import { CardContainer } from './styles'

interface ICoffee {
  id: string
  name: string
  description: string
  categories: string[]
  price: number
  image: string
}

interface ICard {
  coffee: ICoffee
}

export function Card({ coffee }: ICard) {
  const [quantity, setQuantity] = useState(0)
  const { cart, addToCart } = useContext(CartContext)

  console.log({ cart })

  function handleAddProductToCart(item: ICoffee) {
    addToCart(item)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.name} />
      <span>
        {coffee.categories.map((category) => (
          <strong key={category}>{category}</strong>
        ))}
      </span>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <div className="buy-action">
        <div className="price">
          R$ <p>{formatPrice(coffee.price)}</p>
        </div>
        <div className="quantity-wrapper">
          <div className="quantity">
            <Minus size={16} onClick={() => setQuantity(quantity - 1)} />
            <p>{quantity}</p>
            <Plus size={16} onClick={() => setQuantity(quantity + 1)} />
          </div>
          <div
            className="buy-button"
            onClick={() => handleAddProductToCart(coffee)}
          >
            <ShoppingCart weight="fill" />
          </div>
        </div>
      </div>
    </CardContainer>
  )
}
