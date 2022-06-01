import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

  return (
    <ProjectsContext.Provider 
      value={{
        
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