import { useState } from "react"
import useProjects from "../hooks/useProjects"
import Alert from "./Alert"

const FormProject = () => {
  
  const [ nombre, setNombre ] = useState('')
  const [ descripcion, setDescripcion ] = useState('')
  const [ fechaEntrega, setFechaEntrega ] = useState('')
  const [ cliente, setCliente ] = useState('')
  
  const { alerta, mostrarAlerta, submitProyecto } = useProjects()

  const handleSubmit = e => {
    e.preventDefault()

    if ([nombre, descripcion, fechaEntrega, cliente].includes('')) {
      mostrarAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    submitProyecto({
      nombre,
      descripcion,
      fechaEntrega,
      cliente
    })
  }

  const { msg } = alerta

  return (
    <>
      <form 
        className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
        onSubmit={handleSubmit}
      >

        {
          msg && <Alert alerta={alerta} />
        }

        <div className="mb-5">
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="nombre"
          >
            Nombre Proyecto
          </label>
          <input 
            id="nombre"
            type="text"
            value={nombre}
            onChange={ e => setNombre(e.target.value) }
            placeholder="Nombre del Proyecto"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="descripcion"
          >
            Descripcion del Proyecto
          </label>
          <textarea 
            id="descripcion"
            value={descripcion}
            onChange={ e => setDescripcion(e.target.value) }
            placeholder="Descripcion del Proyecto"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="fecha-entrega"
          >
            Fecha de Entrega del Proyecto
          </label>
          <input 
            id="fecha-entrega"
            type="date"
            value={fechaEntrega}
            onChange={ e => setFechaEntrega(e.target.value) }
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="cliente"
          >
            Nombre del Cliente
          </label>
          <input 
            id="cliente"
            type="text"
            value={cliente}
            onChange={ e => setCliente(e.target.value) }
            placeholder="Nombre del Cliente"
            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <input 
          type="submit" 
          value="Crear proyecto"
          className="bg-sky-600 hover:bg-sky-700 w-full p-3 
          uppercase font-bold text-white cursor-pointer rounded transition-colors"
        />

      </form>
    </>
  )
}

export default FormProject