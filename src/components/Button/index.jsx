import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './style'
function Button({
  children,
  type = 'primary',
  shape = 'circle',
  size = '2',
  bgColor = ['red', 'green'],
  onClick,
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      shape={shape}
      size={size}
      bgColor={bgColor}
      onClick={
        onClick
          ? () => {
              onClick()
            }
          : () => {}
      }
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary']),
  shape: PropTypes.oneOf(['circle', 'rect']),
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Button
