import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Layout from './components/Layout'
import Error from './components/Error'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', Helvetica, sans-serif;
  }
  body {
    margin: 0;
  }
`

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Accueil />
            </Layout>
          }
        />
        <Route
          path="/APropos"
          element={
            <Layout>
              <APropos />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Error />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
