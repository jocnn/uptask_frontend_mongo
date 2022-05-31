import { createContext , useState, useEffect} from 'react'
import clienteAxios from '../config/clienteAxios'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [ auth, setAuth ] = useState({})

  useEffect(() => {
    const authUsuario = async () => {
      const token = localStorage.getItem('token')

      if (!token) {
        return
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try {
        const { data } = await clienteAxios(`/usuarios/perfil`, config)
        setAuth(data)
      } catch (error) {
        console.log(error)
      }
    }

    authUsuario()
  }, [])

  return (
    <AuthContext.Provider 
      value={{
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider
}

export default AuthContext