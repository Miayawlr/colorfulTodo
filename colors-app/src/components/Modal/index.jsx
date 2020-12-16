import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledModalContainer, { StyledAction, StyledModal } from './style'

function Modal({ children, title = '提示', onClose, onConfirm }) {
  useEffect(() => {
    // console.log('hello world')
    document
      .querySelector('.layout')
      .addEventListener('touchmove', function (e) {
        e.preventDefault()
      })
  }, [])

  return (
    <StyledModalContainer>
      <StyledModal>
        <p>{title}</p>
        <div className={'modal-context'}>{children}</div>
        <div className={'modal-container'}>
          <StyledAction onClick={() => (onClose ? onClose() : '')}>
            取消
          </StyledAction>
          <StyledAction onClick={() => (onConfirm ? onConfirm() : '')}>
            确定
          </StyledAction>
        </div>
      </StyledModal>
    </StyledModalContainer>
  )
}

Modal.propTypes = {
  chidlren: PropTypes.any,
  title: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
}

export default Modal
