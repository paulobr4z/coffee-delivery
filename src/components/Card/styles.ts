import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 256px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;

  img {
    position: absolute;
    top: -20px;
    padding-top: -20px;
  }

  span {
    display: flex;
    gap: 4px;
    margin-top: 112px;

    strong {
      padding: 4px 8px;
      border-radius: 100px;
      background-color: ${({ theme }) => theme['yellow-light']};
      color: ${({ theme }) => theme['yellow-dark']};

      font-family: 'Roboto';
      font-weight: 700;
      font-size: ${pxToRem(10)};
      line-height: 130%;
    }
  }

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: ${pxToRem(20)};
    line-height: 130%;
    padding-top: 16px;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: ${pxToRem(14)};
    line-height: 130%;
    text-align: center;
    padding-top: 8px;
    color: ${({ theme }) => theme['base-label']};
  }

  .buy-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 34px;

    .price {
      display: flex;
      align-items: center;
      gap: 4px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: ${pxToRem(14)};
      line-height: 130%;
      color: ${({ theme }) => theme['base-text']};

      p {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: ${pxToRem(24)};
        line-height: 130%;
        padding: 0;
        color: ${({ theme }) => theme['base-text']};
      }
    }

    .quantity-wrapper {
      display: flex;
      align-items: center;
      column-gap: 8px;

      .quantity {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 6px;
        width: 80px;
        height: 38px;
        background-color: ${({ theme }) => theme['base-button']};

        p {
          font-family: 'Roboto';
          font-weight: 400;
          font-size: ${pxToRem(16)};
          line-height: 130%;
          padding: 0;
          color: ${({ theme }) => theme['base-title']};
        }

        svg {
          color: ${({ theme }) => theme.purple};
          cursor: pointer;
        }
      }

      .buy-button {
        display: flex;
        padding: 8px;
        border-radius: 6px;
        background-color: ${({ theme }) => theme['purple-dark']};
        cursor: pointer;

        svg {
          color: ${({ theme }) => theme.white};
        }
      }
    }
  }
`
