import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url('/images/main-background.png');
  background-repeat: no-repeat;
  background-size: 100%;
`

export const MainContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  min-height: 544px;
  margin-top: 104px;

  .main-text {
    width: 100%;
    max-width: 588px;

    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: ${pxToRem(48)};
      line-height: 130%;
      margin-bottom: 16px;
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: ${pxToRem(20)};
      line-height: 130%;
    }
  }

  .main-descriptions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    row-gap: 20px;
    width: 100%;
    margin-top: 66px;

    span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
      width: 100%;

      .main-descriptions-icons {
        display: flex;
        padding: 8px;
        border-radius: 50%;
      }

      &:nth-of-type(1) .main-descriptions-icons {
        background-color: ${({ theme }) => theme['yellow-dark']};
      }

      &:nth-of-type(2) .main-descriptions-icons {
        background-color: ${({ theme }) => theme['base-text']};
      }

      &:nth-of-type(3) .main-descriptions-icons {
        background-color: ${({ theme }) => theme.yellow};
      }

      &:nth-of-type(4) .main-descriptions-icons {
        background-color: ${({ theme }) => theme.purple};
      }

      svg {
        color: ${({ theme }) => theme.white};
      }

      p {
        font-size: ${pxToRem(16)};
      }
    }
  }
`
export const CoffeeContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1120px;

  h2 {
    text-align: start;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 54px;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: ${pxToRem(32)};
    line-height: 130%;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1120px;
    column-gap: 32px;
  }
`
