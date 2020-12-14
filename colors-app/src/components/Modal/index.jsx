import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledModalContainer, { StyledModal } from './style'

function Modal({ children, title = '提示' }) {
  useEffect(() => {
    // console.log('hello world')
  }, [])

  return (
    <StyledModalContainer>
      <StyledModal>
        <p>{title}</p>
      </StyledModal>
      {children}
    </StyledModalContainer>
  )
}

Modal.propTypes = {
  chidlren: PropTypes.any,
  title: PropTypes.string,
}

export default Modal
