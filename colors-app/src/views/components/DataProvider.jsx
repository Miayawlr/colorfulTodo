import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useReducer,
} from 'react'
import { getMenuList } from 'model/mine'
const DataContext = createContext({})
const NEXT = 'NEXT'
const PRE = 'PRE'
const defaultIndex = 0 //初始index
const reFetchStatus = false
const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      return action.index
    case 'PRE':
      return action.index
    default:
      break
  }
}
const reFetchReducer = (state, action) => {
  return action
}
const Data = ({ children }) => {
  const [toDoList, setToDoList] = useState([])
  const [count, setCount] = useState(0)
  const [currentIndex, dispatch] = useReducer(reducer, defaultIndex)
  const [reFetch, dispatchFecth] = useReducer(reFetchReducer, reFetchStatus)
  const todoListCallback = useCallback(() => {
    const doThingList = async () => {
      try {
        const res = await getMenuList()
        setToDoList(res.data)
        setCount(res.task_num)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    return doThingList()
  }, [])

  useEffect(() => {
    todoListCallback()
  }, [todoListCallback, reFetch])
  return (
    <DataContext.Provider
      value={{
        toDoList,
        count,
        currentIndex,
        reFetch,
        dispatch,
        dispatchFecth,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { NEXT, PRE, DataContext, Data }
