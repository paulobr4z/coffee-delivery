import { MapPin, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'

interface ILocation {
  city: string
  region_code: string
}

export function Header() {
  const [location, setLocation] = useState<ILocation>()

  useEffect(() => {
    async function onGetLocation() {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const { city, region_code } = await response.json()
        setLocation({
          city,
          region_code,
        })
      } catch (error) {
        console.log(error)
      }
    }

    onGetLocation()
  }, [])

  return (
    <HeaderContainer>
      <div className="wrapper">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="actions">
          <span>
            <MapPin size={24} weight="fill" />
            {location && (
              <p>
                {location.city}, {location.region_code}
              </p>
            )}
          </span>
          <span>
            <ShoppingCart size={24} weight="fill" />
          </span>
        </div>
      </div>
    </HeaderContainer>
  )
}
