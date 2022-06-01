import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

  const [ proyectos, setProyectos ] = useState([])

  return (
    <ProjectsContext.Provider 
      value={{
        proyectos,
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