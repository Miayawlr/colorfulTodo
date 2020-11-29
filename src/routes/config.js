import IndexLayout from 'views/components/IndexLayout' //首页
import TodoDetails from 'views/components/TodoDetails'
import TodoEditor from 'views/components/TodoEditing'

const baseRouter = [
  { path: '/', name: 'Index', component: IndexLayout },
  { path: '/details', name: 'Deatils', component: TodoDetails },
  { path: '/editor', name: 'Editor', component: TodoEditor },
]

export { baseRouter }

