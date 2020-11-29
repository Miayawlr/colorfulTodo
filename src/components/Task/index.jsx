import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import StyledTask, { StyledSwitch, CheckBox, Slider } from './style'
import { useSpring, animated } from 'react-spring'
const Switch = ({ onChange, initalChecked = false, color = '#ff6262', id }) => {
  const [checked, setChecked] = useState(initalChecked)
  const switchRef = useRef(null)
  const handleOnChange = () => {
    setChecked(!checked)
    if (!onChange) return
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

function Task({
  onChange,
  initalChecked = false,
  color,
  onRemove,
  title,
  id,
  ...rest
}) {
  const opacityT = useSpring({
    opacity: initalChecked ? 1 : 0,
    transition: 'all 1s ease',
  })
  const handleDelete = (id) => {
    if (onRemove) {
      onRemove(id)
    }
  }
  return (
    <StyledTask {...rest}>
      <Switch
        color={color}
        initalChecked={initalChecked}
        id={id}
        onChange={onChange}
      />

      <span className={'task-name'}>{title}</span>
      {initalChecked && (
        <span className={'task-delete'} onClick={() => handleDelete(id)}>
          <i className={'fa fa-trash task-delete-icon'}></i>
        </span>
      )}
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
