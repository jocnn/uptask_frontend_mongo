import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProjects from "../hooks/useProjects"

const Project = () => {

  const params = useParams()
  const { obtenerProyecto, proyecto } = useProjects()

  useEffect(() => {
    obtenerProyecto(params.id)
  }, [])

  console.log(proyecto)

  return (
    <>
      <h1>{proyecto.nombre}</h1>
    </>
  )
}

export default Project