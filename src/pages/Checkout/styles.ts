import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 104px;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;
  }
`

export const DeliveryAaddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;

  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: ${pxToRem(18)};
    line-height: 130%;
  }

  form {
    display: block;
    width: 100%;
    max-width: 640px;
    margin-top: 15px;
    padding: 40px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-card']};

    .form-header {
      display: flex;
      column-gap: 8px;
      margin-bottom: 34px;

      svg {
        color: ${({ theme }) => theme['yellow-dark']};
      }

      strong {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: ${pxToRem(16)};
        line-height: 130%;
        color: ${({ theme }) => theme['base-subtitle']};
      }

      p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: ${pxToRem(14)};
        line-height: 130%;
        color: ${({ theme }) => theme['base-text']};
      }
    }

    .form-content {
      display: flex;
      flex-direction: column;
      row-gap: 16px;

      input {
        background-color: ${({ theme }) => theme['base-input']};
        color: ${({ theme }) => theme['base-label']};
        border: 1px solid ${({ theme }) => theme['base-button']};
        padding: 16px;
        border-radius: 4px;
      }

      .get-cep {
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: 12px;

        button {
          background-color: ${({ theme }) => theme['base-input']};
          color: ${({ theme }) => theme['base-label']};
          border: 1px solid ${({ theme }) => theme['base-button']};
          padding: 16px;
          border-radius: 4px;
          cursor: pointer;
        }
      }

      .number-complement {
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 12px;
      }

      .district-city {
        display: grid;
        grid-template-columns: 1fr 1fr 58px;
        column-gap: 12px;
      }
    }
  }
`

export const SelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;

  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: ${pxToRem(18)};
    line-height: 130%;
  }

  .wrapper {
    width: 100%;
    max-width: 448px;
    border-radius: 6px 44px;
    margin-top: 15px;
    padding: 40px;
    background-color: ${({ theme }) => theme['base-card']};
  }

  .order-item {
    display: flex;
    width: 100%;
    padding: 24px 0;
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};

    &:first-of-type {
      padding-top: 0;
    }

    img {
      width: 64px;
      height: 64px;
      margin-right: 20px;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;

      .description {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .actions {
        display: flex;
        gap: 8px;
        margin-top: 8px;
      }
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 6px;
    width: 80px;
    height: 38px;
    background-color: ${({ theme }) => theme['base-button']};
    cursor: pointer;

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

  .remove {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 6px;
    width: 90px;
    height: 38px;
    background-color: ${({ theme }) => theme['base-button']};
    cursor: pointer;

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: ${pxToRem(12)};
      line-height: 130%;
      padding: 0;
      color: ${({ theme }) => theme['base-text']};
    }

    svg {
      color: ${({ theme }) => theme.purple};
      cursor: pointer;
    }
  }

  .total {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 24px 0;
    width: 100%;

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p:first-child {
        font-size: ${pxToRem(14)};
      }

      p:last-child {
        font-size: ${pxToRem(16)};
      }

      strong {
        font-size: ${pxToRem(20)};
      }
    }
  }

  .confirm-order {
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.white};
    border: none;
    outline: none;

    font-family: 'Roboto';
    font-size: ${pxToRem(14)};
    font-weight: 700;
    line-height: 22px;
  }
`
export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  padding: 40px;
  border-radius: 6px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme['base-card']};

  .payment-header {
    display: flex;
    column-gap: 8px;
    margin-bottom: 34px;

    svg {
      color: ${({ theme }) => theme.purple};
    }

    strong {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: ${pxToRem(16)};
      line-height: 130%;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: ${pxToRem(14)};
      line-height: 130%;
      color: ${({ theme }) => theme['base-text']};
    }
  }

  .payment-type {
    display: flex;
    gap: 12px;
  }
`
