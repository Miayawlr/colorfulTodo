import React from 'react'
import PropTypes from 'prop-types'
import StyledGradientColor from './style'

const GradientActive = (active) => {
  if (active) {
    return { opacity: 1 }
  }
}

function GradientColor({
  active = false,
  colors = ['#ff6262', '#ffa947'],
  ...rest
}) {
  return (
    <StyledGradientColor
      {...rest}
      style={GradientActive(active)}
      active={active}
      colors={colors}
    ></StyledGradientColor>
  )
}

GradientColor.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
  colors: PropTypes.array,
}

export default GradientColor
