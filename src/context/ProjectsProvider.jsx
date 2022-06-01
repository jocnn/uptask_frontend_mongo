import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

  const [ proyectos, setProyectos ] = useState([])
  const [ alerta, setAlerta ] = useState({})

  const mostrarAlerta = alerta => {
    setAlerta(alerta)
    
    setTimeout(() => {
      setAlerta({})
    }, 3000);
  }

  const submitProyecto = async proyecto => {
    console.log(proyecto)
  }

  return (
    <ProjectsContext.Provider 
      value={{
        proyectos,
        alerta,
        mostrarAlerta,
        submitProyecto
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export {
  ProjectsProvider
}

export default ProjectsContext