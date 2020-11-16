import React from 'react'
import PropTypes from 'prop-types'
import StyledHeaderBar from './style'
function HeaderBar({
  title = 'todo',
  leftIcon = 'bars',
  rightIcon = 'search',
  srIcon = true,
  color = '',
  onBack,
  ...rest
}) {
  const handleGoBack = () => {
    if (onBack) {
      onBack()
    }
  }
  return (
    <StyledHeaderBar color={color} {...rest}>
      <span className={'app-bar_l'} onClick={() => handleGoBack()}>
        <i className={`fa fa-${leftIcon}`}></i>
      </span>
      <h1> {title}</h1>
      {srIcon && (
        <span className={'app-bar_r'}>
          <i className={`fa fa-${rightIcon}`}></i>
        </span>
      )}
    </StyledHeaderBar>
  )
}

HeaderBar.propTypes = {
  onBack: PropTypes.func,
  title: PropTypes.any,
  color: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  srIcon: PropTypes.bool,
}

export default HeaderBar
