import styled from 'styled-components'
import { alignCenter } from 'theme/layout'

const StyledHeaderBar = styled.div`
  display: flex;
  ${alignCenter()};
  /* color: #fff; */
  color: ${({ color, theme }) => (color ? color : theme.iconColor)};
  height: 3rem;
  font-size: 1rem;
  z-index: 1;
  h1 {
    flex: 1;
    text-align: center;
  }
  .app-bar_l,
  .app-bar_r {
    padding: 0 1.3rem;
  }
`
export default StyledHeaderBar
