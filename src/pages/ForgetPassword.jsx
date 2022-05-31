import { useState } from "react"
import { Link } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Alert from "../components/Alert"

const ForgetPassword = () => {
  
  const [ showForm, setShowForm ] = useState(true)
  const [ email, setEmail ] = useState('')
  const [ alerta, setAlerta ] = useState({})
  
  const handleSubmit = async e => {
    e.preventDefault()

    if (email === '' || email.length < 6) {
      setAlerta({
        msg: 'El email es obligatorio',
        error: true
      })
      return
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })

      setAlerta({
        msg: data.msg,
        error: false
      })
      setShowForm(false)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Recupera tu Acceso y no pierdas tus {' '}<span className="text-slate-700">Proyectos</span>
      </h1>

      {
        msg && 
          <Alert 
            alerta={alerta} 
          />
      }

      {
        showForm && (
          <form 
            onSubmit={handleSubmit}
            className="my-10 bg-white shadow rounded-lg p-10"
          >
            <div className="my-5">
              <label 
                htmlFor="email"
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="Correo Electrónico"
                className="w-full mt-3 p-3 border rounded bg-gray-50"
                value={email}
                onChange={ e => setEmail(e.target.value) }
              />
            </div>

            <input 
              type="submit" 
              value="Enviar Instrucciones"
              className="mb-5
                bg-sky-700 w-full py-3 text-white 
                uppercase font-bold rounded hover:cursor-pointer
                hover:bg-sky-800 transition-colors"
            />
          </form>
        )
      }

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >¿Ya tienes una cuenta? Iniciar Sesión
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/registrar"
        >¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  )
}

export default ForgetPassword