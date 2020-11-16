import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useReducer,
} from 'react'
import { getTodoList } from 'model/mine'
const DataContext = createContext()

const Data = ({ children }) => {
  const [toDoList, setToDoList] = useState([])
  const todoListCallback = useCallback(() => {
    const doThingList = async () => {
      try {
        const res = await getTodoList()
        setToDoList(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    return doThingList()
  }, [])
  useEffect(() => {
    todoListCallback()
  }, [todoListCallback])
  return (
    <DataContext.Provider value={toDoList}>{children}</DataContext.Provider>
  )
}

export { DataContext, Data }
