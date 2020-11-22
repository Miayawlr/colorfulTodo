import styled from 'styled-components'
import Todo from 'components/Todo'
import Button from 'components/Button'
const StyledTodoContainer = styled.div`
  padding: 0.3rem ${({ theme }) => theme.layoutPadding}rem;
  height: 22.8rem;
  transition: all 0.7s ease;
  /* overflow: hidden; */
  overflow-x: hidden;
  > ul,
  > ul > li {
    display: flex;
    height: 100%;
  }
  > ul > li {
    flex: 1;
    transition: transform 0.5s ease;
  }
  ul {
  }
  ${({ selected }) => (selected ? ` transform: scaleX(1.25)` : '')};
`

const ToDo = styled(Todo)`
  border-radius: 0.34rem;
  background-color: white;
  /* height: 100%; */
  min-height: 100%;
  flex: 1;
`

// 详情容器
const StyledDetails = styled.div`
  /* position: relative; */
`
// 详情

const Details = styled(Todo).attrs({ ShowTasks: true })`
  .todo-progress-line {
    height: 0.15rem !important;
  }
  /* .todo-header,
  .todo-body {
    transform: translate3d(0, 2rem, 0);
  } */
`

const DetailsBtn = styled(Button).attrs({ size: 2.6 })`
  width: ${({ size }) => size}rem;
  position: fixed;
  right: 2rem;
  top: 80vh;
  z-index: 20;
  color: #fff;
`

export default StyledTodoContainer
export { ToDo, StyledDetails, Details, DetailsBtn }
