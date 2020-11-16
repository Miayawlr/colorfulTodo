import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledTask, { StyledSwitch, CheckBox, Slider } from './style'

const Switch = ({ onChange, initalChecked = false, color = '#ff6262' }) => {
  const [checked, setChecked] = useState(initalChecked)
  const handleOnChange = () => {
    setChecked(!checked)
    if (!onChange) return
    onChange(checked)
  }
  return (
    <StyledSwitch
      initalChecked={initalChecked}
      onChange={() => handleOnChange()}
    >
      <CheckBox name="id" color={color} defaultValue={checked} />
      <Slider />
    </StyledSwitch>
  )
}
// / ${({ defaultValue }) => (defaultValue ? `${1.2}rem` : `${0}rem`)}

function Task({
  onChange,
  initalChecked = false,
  color,
  onRemove,
  children,
  ...rest
}) {
  const handleDelete = () => {
    if (onRemove) {
      onRemove('9')
    }
  }

  return (
    // initalChecked={initalChecked}
    <StyledTask {...rest}>
      <Switch color={color} initalChecked={initalChecked} />
      <span className={'task-name'}>{children}</span>
      <span className={'task-delete'} onClick={() => handleDelete()}>
        <i className={'fa fa-trash'}></i>
      </span>
    </StyledTask>
  )
}

Task.propTypes = {
  onChange: PropTypes.func,
  initalChecked: PropTypes.bool,
  color: PropTypes.string,
  onRmove: PropTypes.func,
  children: PropTypes.any,
}

export default Task
