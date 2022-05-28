import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Crea tu Cuenta y Administra tus {' '}<span className="text-slate-700">Proyectos</span>
      </h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
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
            type="repeat_password"
            placeholder="Repetir su contraseña"
            className="w-full mt-3 p-3 border rounded bg-gray-50"
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
          to="olvide-password"
        >Olvide Mi Contraseña
        </Link>
      </nav>
    </>
  )
}

export default Register