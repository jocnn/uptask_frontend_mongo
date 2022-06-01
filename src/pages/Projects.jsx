import useProjects from "../hooks/useProjects"

const Projects = () => {
  
  const { proyectos } = useProjects()
  
  return (
    <>
      <h1
        className="text-4xl font-black"
      >
        Proyectos
      </h1>

      <div>
        
      </div>
    </>
  )
}

export default Projects