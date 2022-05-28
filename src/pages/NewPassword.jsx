import { Link } from "react-router-dom"

const NewPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Restablece tu password y no pierdas acceso a tus {' '}<span className="text-slate-700">Proyectos</span>
      </h1>

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
    </>
  )
}

export default NewPassword