import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useNavigate } from 'react-router-dom'

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

  const [ proyectos, setProyectos ] = useState([])
  const [ alerta, setAlerta ] = useState({})

  const navigate = useNavigate()

  const mostrarAlerta = alerta => {
    setAlerta(alerta)
    
    setTimeout(() => {
      setAlerta({})
    }, 3000);
  }

  
  const submitProyecto = async proyecto => {
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.post(`/proyectos`, proyecto, config)

      setAlerta({
        msg: 'Proyecto creado correctamente',
        error: false
      })

      setTimeout(() => {
        setAlerta({})
        navigate('/proyectos')
      }, 3000);

    } catch (error) {
      console.log(error)
      
    }
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