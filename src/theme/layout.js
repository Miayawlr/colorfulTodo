import { css } from 'styled-components'

const flex = () => css`
  display: flex;
`

const alignCenter = () => css`
  align-items: center;
`

const flexAround = (center = true) => css`
  ${flex()};
  ${center && alignCenter()};
`

const flexBetween = (center = true) => css`
  ${flex()};
  ${center && alignCenter()};
  justify-content: space-between;
`

const flexCenter = (center = true) => css`
  ${flex()};
  ${center && alignCenter()};
  justify-content: center;
`

export { alignCenter, flexAround, flexBetween, flexCenter }
