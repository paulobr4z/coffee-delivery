import styled from 'styled-components'
import { pxToRem } from '../../utils'

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 104px;

  .wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    width: 100%;
    max-width: 1120px;

    .confirmation-header {
      margin-top: 40px;

      h3 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: ${pxToRem(32)};
        line-height: 130%;
        color: ${({ theme }) => theme['yellow-dark']};
      }

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: ${pxToRem(20)};
        line-height: 130%;
      }
    }

    main {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      .delivery-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        max-width: 526px;
        padding: 40px;
        gap: 32px;
        background: linear-gradient(white, white) padding-box,
          linear-gradient(to right, #dbac2c, #8047f8) border-box;
        border: 1px solid transparent;
        border-radius: 6px 36px;

        .delivery-description {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          .map,
          .clock,
          .dollar {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          .map {
            background-color: ${({ theme }) => theme.purple};
          }
          .clock {
            background-color: ${({ theme }) => theme.yellow};
          }
          .dollar {
            background-color: ${({ theme }) => theme['yellow-dark']};
          }

          svg {
            color: ${({ theme }) => theme.white};
          }
        }
      }
    }
  }
`
