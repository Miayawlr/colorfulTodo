import React from 'react'
import PropTypes from 'prop-types'
import Ava from 'assets/ava.jpg'
import StyledAvatar, { AvatarClip, AvatarImage } from './style'
function Avatar({ src = Ava, size = 4, onClick, ...rest }) {
  const handleOnClick = () => {
    console.log('3')
    if (onClick) {
      onClick()
    }
  }
  return (
    <StyledAvatar {...rest}>
      <AvatarClip size={size} onMouseEnter={() => handleOnClick()}>
        <AvatarImage src={src} />
      </AvatarClip>
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Avatar
