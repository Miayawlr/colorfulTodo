import styled, { css } from 'styled-components'

const activeVariant = css`
  opacity: 1;
`

const colorsVariant = (colors) => {
  const colorBottom = `color-stop(30%,${colors[0]})`
  const colorTop = `to(${colors[1]})`
  return `background-image:
  -webkit-gradient(linear,left bottom,left top,${colorBottom}, ${colorTop})`
}

const StyledGradientColor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  ${({ active }) => (active ? activeVariant : '')};
  ${({ colors }) => colorsVariant(colors)};
`
export default StyledGradientColor
