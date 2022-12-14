import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const PaymentTypeContainer = styled.button`
  display: flex;
  gap: 15px;
  width: 100%;
  border: none;

  span {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 16px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-button']};
    border: 1px solid ${({ theme }) => theme['base-card']};
    cursor: pointer;

    p {
      display: flex;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: ${pxToRem(12)};
      line-height: 160%;
      color: ${({ theme }) => theme['base-text']};
      white-space: nowrap;
      text-transform: uppercase;
    }

    svg {
      color: ${({ theme }) => theme.purple};
    }
  }

  .selected {
    border: 1px solid ${({ theme }) => theme.purple};
    background-color: ${({ theme }) => theme['purple-light']};
  }
`
