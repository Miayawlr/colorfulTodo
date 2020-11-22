import styled, { css } from 'styled-components'

const gradientColor = (colors) => {
  const colorLeft = `color-stop(30%, ${colors[0]})`
  const colorRight = `to(${colors[1]})`
  return `background:-webkit-gradient(linear, left bottom, right top, ${colorLeft}, ${colorRight})`
}

const shapeVariants = {
  circle: css`
    width: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
  rect: css`
    display: flex;
    /* display: inline-flex; */
    align-items: center;

    justify-content: center;
    padding: 0.6rem 1.1rem;
    border-radius: 0.4rem;
  `,
}

// const typeVariants = {
//   primary: css`
//     background-color: ${({ theme }) => theme.primaryColor};
//     color: #fff;
//   `,
// }

const StyledButton = styled.div`
  border: none;
  transition: all 0.5s ease;
  outline: none;
  font-size: 0.7rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  ${({ shape }) => shapeVariants[shape]};
  ${({ bgColor }) => gradientColor(bgColor)}
`
export default StyledButton
