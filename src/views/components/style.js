import styled from 'styled-components'
import Avatar from 'components/Avatar'
const StyledSummary = styled.div`
  display: flex;
  /* padding: 0 2rem; */
  padding: 0 ${({ theme }) => theme.layoutPadding}rem;
  justify-content: flex-end;
  flex-direction: column;
  transition: all 0.5s ease;
  color: ${({ theme }) => theme.iconColor};
  .summary-name {
    margin-top: 0.7rem;
    padding: 0 0.5rem;
    font-size: 2rem;
    letter-spacing: 1px;
    font-weight: 300;
  }
  .summary-tips {
    margin-top: 0.31rem;
    font-size: 0.8rem;
    padding: 0 0.5rem;
    font-weight: 100;
    opacity: 0.8;
    line-height: 1.6em;
  }
  .summary-date {
    margin: 0.7rem 0 0.7rem 0;
    padding: 0 0.5rem;
    font-size: 0.39rem;
  }
`

const SummaryAvatar = styled(Avatar).attrs({ size: 2.5 })`
  margin-top: 0.95rem;
  padding: 0 0.5rem;
`

export default StyledSummary
export { SummaryAvatar }
