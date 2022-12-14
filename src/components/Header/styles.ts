import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 104px;
  background-color: ${({ theme }) => theme.background};

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;
    margin: 0 16px;

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      span:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 6px;
        gap: 4px;
        background-color: ${({ theme }) => theme['purple-light']};

        p {
          color: ${({ theme }) => theme['purple-dark']};
          font-size: ${pxToRem(14)};
        }

        svg {
          color: ${({ theme }) => theme['purple-dark']};
        }
      }

      span:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 6px;
        background-color: ${({ theme }) => theme['yellow-light']};
        cursor: pointer;

        svg {
          color: ${({ theme }) => theme['yellow-dark']};
        }
      }
    }
  }
`
