import Layout from 'views/Layout'
import { theme } from 'theme/theme'
import { ThemeProvider } from 'styled-components'
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </div>
  )
}

export default App
