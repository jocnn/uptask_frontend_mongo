import { BrowserRouter, Routes, Route } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"
import ProtectedRoute from "./layouts/ProtectedRoute"

import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgetPassword from "./pages/ForgetPassword"
import NewPassword from "./pages/NewPassword"
import ConfirmAccount from "./pages/ConfirmAccount"
import { AuthProvider } from "./context/AuthProvider"
import Projects from "./pages/Projects"

function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Register />} />
            <Route path="olvide-password" element={<ForgetPassword />} />
            <Route path="olvide-password/:token" element={<NewPassword />} />
            <Route path="confirmar/:id" element={<ConfirmAccount />} />
          </Route>
          <Route path="/proyectos" element={ <ProtectedRoute />}>
            <Route index element={<Projects />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
