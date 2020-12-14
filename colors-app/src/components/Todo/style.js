import styled, { css } from 'styled-components'
import { flexBetween, flexCenter } from 'theme/layout'

const selectedVariant = css`
  visibility: hidden;
`

// const tranfrom

const StyledTodo = styled.div`
  flex: 1;
  margin: 0 0.35rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #666;
  ${({ selected }) => (selected ? selectedVariant : '')};
`
const TodoHeader = styled.div`
  ${flexBetween()};
  padding: 0.9rem ${({ theme }) => theme.basePadding}rem;
  height: 2rem;
  align-items: flex-start;
  /* transform: translate3d(0, 2rem, 0); */
  .todo-icon {
    ${flexCenter()}
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    font-size: 1.1rem;
    border: 1px solid #eee;
  }
  .todo-menu {
    color: #eee;
  }
`
const TodoBody = styled.section`
  padding: 0 ${({ theme }) => theme.basePadding}rem;
  transform: translate3d(0, 9rem, 0);
  .todo-tips {
    opacity: 0.6;
    font-size: 0.7rem;
    font-weight: 600;
  }
  .todo-title {
    /* base font size 1.4rem  */
    /* normal size 1.1rem */
    /** mini size .76rem  */
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }

  .todo-progress {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    margin-top: 1.9rem;
    padding-bottom: 1.3rem;
    .todo-progress-line {
      flex: 1;
      margin-right: 0.8rem;
      height: 0.3rem;
      overflow: hidden;
      background-color: #eee;
      border-radius: 1.5rem;
      i {
        height: 100%;
        border-radius: 1.5rem;
        display: block;
        transition: all 0.45s ease;
      }
    }
    .todo-progress-nums {
      font-size: 0.75rem;
    }
  }
`

const TasksContainer = styled.div`
  ul,
  ul > li {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  ul {
  }
`

export default StyledTodo
export { TodoHeader, TodoBody, TasksContainer }
