import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import StyledTask, { StyledSwitch, CheckBox, Slider } from './style'

const Switch = ({ onChange, initalChecked = false, color = '#ff6262', id }) => {
  const [checked, setChecked] = useState(initalChecked)
  const switchRef = useRef(null)
  const handleOnChange = () => {
    setChecked(!checked)
    if (!onChange) return
    // console.log(switchRef.current)
    onChange(!checked, id)
  }

  return (
    <StyledSwitch>
      <CheckBox
        ref={switchRef}
        onChange={() => handleOnChange()}
        checked={checked}
        name="id"
        color={color}
        defaultValue={checked}
      />
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
  title,
  id,
  ...rest
}) {
  const [cheked, setChecked] = useState(false)
  const handleDelete = (id) => {
    if (onRemove) {
      onRemove(id)
    }
  }
  // console.log(id)
  return (
    // initalChecked={initalChecked}
    <StyledTask {...rest}>
      <Switch
        color={color}
        initalChecked={initalChecked}
        id={id}
        onChange={onChange}
      />
      <span className={'task-name'}>{title}</span>
      <span className={'task-delete'} onClick={() => handleDelete(id)}>
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
