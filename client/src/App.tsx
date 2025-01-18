import { Navigate, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import NavBar from "./components/NavBar"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import MainPage from "./pages/Main"


function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={user ? <MainPage /> : <LoginPage />} />
          <Route path="/register" element={user ? <MainPage /> : <RegisterPage />} />
          <Route path="/login" element={user ? <MainPage /> : <LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
