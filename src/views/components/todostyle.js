import styled from 'styled-components'
import Todo from 'components/Todo'
import Button from 'components/Button'
import HeaderBar from 'components/HeaderBar'
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

const StyledEditorContainer = styled.div`
  padding: 0 1rem;
  .todo-editing-head {
    color: #999;
    /* padding: 2rem 1rem 0; */
    padding-top: 2rem;
    font-size: 0.95rem;
    text-align: center;
  }
  .todo-editing-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 0.5rem 0;
    width: 100%;
    textarea {
      width: 90%;
      /* text-align: center; */
      margin: 0.3rem 0;
      font-size: 1.2rem;
      border: none;
      outline: none;
      color: #666;
      line-height: 1.2em;
    }
  }

  .sapcer {
    height: 2rem;
  }
  .todo-editing-meta {
    display: flex;
    height: 2.3rem;
    width: 90%;
    align-items: center;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
    color: #999;
    i {
      padding-right: 0.7rem;
    }
  }
`

const EditorHeader = styled(HeaderBar)`
  height: 2.7rem;
  i {
    font-size: 0.8rem;
  }
  h1 {
    font-size: 0.8rem;
  }
`

const EdiotrBtn = styled(Button)`
  border-radius: 0;
  padding: 0.65rem 0 !important;
  box-shadow: none;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  /* width: 100%; */
  bottom: 0;
  z-index: 10;
  .cube-add {
    flex: 1;
    display: flex;
    justify-content: center;
    color: #fff;
  }
`

export default StyledTodoContainer
export {
  ToDo,
  StyledDetails,
  Details,
  DetailsBtn,
  StyledEditorContainer,
  EditorHeader,
  EdiotrBtn,
}
