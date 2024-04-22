import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Error404 from "./pages/Error404/Error404"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ProtectedRouter from "./components/ProtectedRouter"
import Home from "./pages/Home"

function Logout() {
  localStorage.clear()
  return <Navigate to='/login' />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
