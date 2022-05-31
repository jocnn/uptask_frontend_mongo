import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Alert from "../components/Alert"

const NewPassword = () => {

  const [ passwordAceptada, setPasswordAceptada ] = useState(false)
  const [ password, setPassword ] = useState('')
  const [ tokenValido, setTokenValido ] = useState(false)
  const [ alerta, setAlerta ] = useState({})

  const params = useParams()
  const { token } = params

  useEffect(() => {

    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`)
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

  const handleSubmit = async e => {
    e.preventDefault()

    if (password.length < 6) {
      setAlerta({
        msg: 'El password debe ser minimo de 6 caracteres',
        error: true
      })
      return
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password/${token}`, { password })
      setAlerta({
        msg: data.msg,
        error: false
      })
      setTokenValido(false)
      setPasswordAceptada(true)
    } catch (error) {
      setPasswordAceptada(false)
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

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
          <form 
            onSubmit={handleSubmit}
            className="my-10 bg-white shadow rounded-lg p-10"
          >
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
                value={password}
                onChange={ e => setPassword(e.target.value) }
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

      {
        passwordAceptada && (
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
          >Iniciar Sesión
          </Link>
        )
      }
    </>
  )
}

export default NewPassword