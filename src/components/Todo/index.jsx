import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledTodo, { TodoBody, TodoHeader, TasksContainer } from './style'
import Task from 'components/Task'
// DETA
function TodoTasks({ color, children, onRemove, tasksList }) {
  const lastBottom = (lastIndex, i) => {
    if (lastIndex === i) {
      return { borderBottom: 0 }
    }
  }
  return (
    <React.Fragment>
      <TasksContainer>
        <h4>ToDoTaks</h4>
        <ul>
          {tasksList.map((task, i) => (
            <li key={task + i}>
              <Task
                initalChecked={false}
                color={color}
                style={lastBottom(tasksList.length - 1, i)}
                onRemove={onRemove}
                children={children}
              />
            </li>
          ))}
        </ul>
      </TasksContainer>
    </React.Fragment>
  )
}

function Todo({
  toDo = {},
  children,
  todoIcon = 'user',
  todoIconColor = 'red',
  selected = false,
  tasks = [],
  title = '测试',
  ShowTasks = false,
  onRemove,
  srIcon = true,
  ...rest
}) {
  const [pre, setPre] = useState(0)

  useEffect(() => {
    const totalCount = tasks.filter((t) => !t.deleted).length
    const doneCount = tasks.filter((t) => !t.deleted && t.done).length
    const precentage = Math.round((doneCount / totalCount) * 100)
    setPre(precentage)
  }, [tasks])
  return (
    <StyledTodo selected={selected} {...rest}>
      {/* Todo Header 头部 */}
      <TodoHeader>
        <div className={'todo-icon'}>
          <i
            className={`fa fa-${todoIcon}`}
            style={{ color: todoIconColor }}
          ></i>
        </div>
        {srIcon && (
          <div className={'todo-menu'}>
            <i className={'fa fa-ellipsis-v'}></i>
          </div>
        )}
      </TodoHeader>
      <TodoBody>
        <p className={'todo-tips'}>{tasks.length}Tasks</p>
        <h3 className={'todo-title'}>{title}</h3>
        <div className={'todo-progress'}>
          <span className={'todo-progress-line'}>
            <i style={{ width: `${pre}%`, backgroundColor: todoIconColor }}></i>
          </span>
          <span className={'todo-progress-nums'}>{pre}%</span>
        </div>
        {ShowTasks && (
          <TodoTasks
            tasksList={tasks}
            color={todoIconColor}
            children={children}
            onRemove={onRemove}
          ></TodoTasks>
        )}
      </TodoBody>
    </StyledTodo>
  )
}

Todo.propTypes = {
  toDo: PropTypes.object,
  onRemove: PropTypes.func,
  children: PropTypes.any,
  todoIcon: PropTypes.string,
  todoIconColor: PropTypes.string,
  tasks: PropTypes.array,
  selected: PropTypes.bool,
  srIcon: PropTypes.bool,
}

export default Todo
