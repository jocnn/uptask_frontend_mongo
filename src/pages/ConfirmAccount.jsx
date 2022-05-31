import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"

import Alerta from "../components/Alert"

const ConfirmAccount = () => {
  
  const [ alerta, setAlerta ] = useState({})
  const [ confirmada, setConfirmada ] = useState(false)

  const params = useParams()
  const { id } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`
        const { data } = await clienteAxios(url)

        setAlerta({
          msg: data.msg,
          error: false
        })
        setConfirmada(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }

    confirmarCuenta()
  }, [])
  
  const { msg } = alerta

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirma tu Cuenta y comienza a crear tus {' '}<span className="text-slate-700">Proyectos</span>
      </h1>

      <div className="mt-10 md:mt-5 shadow-lg px-5 py-5 rounded bg-white">
        {
          msg && <Alerta alerta={alerta} />
        }

        {
          confirmada && (
            <Link
              className="block text-center my-5 text-slate-500 uppercase text-sm"
              to="/"
            >Iniciar Sesión
            </Link>
          )
        }
      </div>
    </>
  )
}

export default ConfirmAccount