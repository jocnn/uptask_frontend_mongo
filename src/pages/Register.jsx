import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import Alert from "../components/Alert"

const Register = () => {

  const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword ] = useState('')
  const [ alerta, setAlerta ] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({
        msg: 'Todos los mensajes son obligatorios',
        error: true
      })
      return
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: 'Las contraseñas no son iguales',
        error: true
      })
      return
    }

    if (password.length < 6 ) {
      setAlerta({
        msg: 'La contraseña es muy corta, agrega minimo 6 caracteres',
        error: true
      })
      return
    }

    setAlerta({})

    // creacion de usuario en la api
    try {
      const respuesta = await axios.post('http://localhost:4000/api/usuarios', {nombre, email, password})
      console.info(respuesta)
    } catch (error) {
      console.log("🚀 ~ file: Register.jsx ~ line 48 ~ Register ~ error", error)
    }
  }

  const { msg } = alerta

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Crea tu Cuenta y Administra tus {' '}<span className="text-slate-700">Proyectos</span>
      </h1>

      {
        msg && <Alert alerta={alerta} />
      }

      <form 
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label 
            htmlFor="nombre"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="nombre"
            placeholder="Nombre de usuario"
            className="w-full mt-3 p-3 border rounded bg-gray-50"
            value={nombre}
            onChange={ e => setNombre(e.target.value) }
          />
        </div>

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

        <div className="my-5">
          <label 
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password para la cuenta"
            className="w-full mt-3 p-3 border rounded bg-gray-50"
            value={password}
            onChange={ e => setPassword(e.target.value) }
          />
        </div>

        <div className="my-5">
          <label 
            htmlFor="repeat_password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Repetir contraseña
          </label>
          <input
            id="repeat_password"
            type="password"
            placeholder="Repetir su contraseña"
            className="w-full mt-3 p-3 border rounded bg-gray-50"
            value={repetirPassword}
            onChange={ e => setRepetirPassword(e.target.value) }
          />
        </div>

        <input 
          type="submit" 
          value="Crear Cuenta"
          className="mb-5
            bg-sky-700 w-full py-3 text-white 
            uppercase font-bold rounded hover:cursor-pointer
            hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >¿Ya tienes una cuenta? Iniciar Sesión
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvide-password"
        >Olvide Mi Contraseña
        </Link>
      </nav>
    </>
  )
}

export default Register