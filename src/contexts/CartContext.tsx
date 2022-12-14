import { createContext, useState } from 'react'

interface ICoffee {
  id: string
  name: string
  description: string
  categories: string[]
  price: number
  image: string
}

interface ICartContext {
  cart: ICoffee[]
  addToCart: (coffee: ICoffee) => void
}

export const CartContext = createContext({} as ICartContext)

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<ICoffee[]>([])

  function addToCart(coffee: ICoffee) {
    setCart([...cart, coffee])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
