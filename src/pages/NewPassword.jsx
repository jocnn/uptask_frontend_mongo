import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Alert from "../components/Alert"


const NewPassword = () => {

  const [ tokenValido, setTokenValido ] = useState(false)
  const [ alerta, setAlerta ] = useState({})

  const params = useParams()
  const { token } = params

  useEffect(() => {
    
    const comprobarToken = async () => {
      try {
        await axios(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    comprobarToken()
  }, [])

  const { msg } = alerta

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Restablece tu password y no pierdas acceso a tus {' '}<span className="text-slate-700">Proyectos</span>
      </h1>

      {
        msg && <Alert alerta={alerta} />
      }

      {
        tokenValido && (
          <form className="my-10 bg-white shadow rounded-lg p-10">
            
            <div className="my-5">
              <label 
                htmlFor="password"
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Nueva Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Escribe tu nueva contraseña"
                className="w-full mt-3 p-3 border rounded bg-gray-50"
              />
            </div>

            <input 
              type="submit" 
              value="Guardar Nueva Contraseña"
              className="mb-5
                bg-sky-700 w-full py-3 text-white 
                uppercase font-bold rounded hover:cursor-pointer
                hover:bg-sky-800 transition-colors"
            />
          </form>
        )
      }
    </>
  )
}

export default NewPassword