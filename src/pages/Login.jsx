import { Outlet } from "react-router-dom"

const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Inicia Sesión y Administra tus {' '}<span className="text-slate-700">Proyectos</span>
      </h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label 
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded bg-gray-50"
          />
        </div>

        <div className="my-5">
          <label 
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded bg-gray-50"
          />
        </div>

        <input 
          type="submit" 
          value="Iniciar sesión"
          className="mb-5
            bg-sky-700 w-full py-3 text-white 
            uppercase font-bold rounded hover:cursor-pointer
            hover:bg-sky-800 transition-colors"
        />
      </form>

      <Outlet />
    </>
  )
}

export default Login