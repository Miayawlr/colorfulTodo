import styled from 'styled-components'

const StyledModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.4);
`

const StyledModal = styled.div`
  position: absolute;
  width: 15rem;
  height: 12rem;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translateX(-50%);
`

export default StyledModalContainer
export { StyledModal }
