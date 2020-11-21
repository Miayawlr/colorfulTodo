import styled from 'styled-components'

const switchChecked = (checkedStatus, color) => {
  // console.log(checkedStatus, color)
  if (checkedStatus) return color
  return `#eee`
}

const StyledTask = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  padding: 0.8rem 0 0.8rem 0;
  font-size: 0.85rem;
  border-bottom: 1px solid #eee;
  .task-name {
    flex: 1;
    box-sizing: border-box;
    padding-left: 1rem;
  }
  .task-delete {
    padding: 0 0.7rem;
    color: #ccc;
    font-size: 1.1rem;
  }
`

const StyledSwitch = styled.label`
  width: 2.3rem;
  height: 1.2rem;
  position: relative;
  display: inline-block;
`

const Slider = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 1rem;
  transition: 0.4s;
  background-color: #eee;
  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 1.1rem;
    height: 1.1rem;
    background-color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.1),
      0px 3px 1px rgba(0, 0, 0, 0.54);
    border-radius: 50%;
    transition: 0.4s;
  }
`
const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 0;
  height: 0;
  opacity: 0;
  :checked + ${Slider} {
    background-color: ${({ defaultValue, color }) =>
      switchChecked(defaultValue, color)};
    ::before {
      transform: translateX(
        ${({ defaultValue }) => (defaultValue ? `${1.2}rem` : `${0}rem`)}
      );
    }
  }
`

export default StyledTask

export { StyledSwitch, Slider, CheckBox }
