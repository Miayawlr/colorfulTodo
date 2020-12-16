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
  width: 12.5rem;
  height: 8rem;
  top: 35%;
  left: 50%;
  padding: 0.5rem 0.3rem;
  overflow: hidden;
  border-radius: 0.55rem;
  background-color: #fff;
  transform: translateX(-50%);
  p {
    padding-top: 0.5rem;
    text-align: center;
    color: #3c3c3c;
    font-size: 0.85rem;
  }
  .modal-context {
  }
  .modal-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`

const StyledAction = styled.div`
  height: 2rem;
  flex: 1;
  border: 1px solid rgb(234, 234, 234);
  border-bottom: 0;
  border-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0;
  color: #3c3c3c;
  font-size: 0.75rem;
  &:nth-child(even) {
    border-left: 1px solid rgb(234, 234, 234);
  }
`

export default StyledModalContainer
export { StyledModal, StyledAction }
