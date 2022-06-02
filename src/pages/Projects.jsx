import useProjects from "../hooks/useProjects"
import PreviewProject from "../components/PreviewProject"

const Projects = () => {
  
  const { proyectos } = useProjects()
  
  return (
    <>
      <h1 className="text-4xl font-black" >Proyectos</h1>

      <div className="bg-white shadow mt-10 rounded-lg">

        {
          proyectos.length ? proyectos.map( proyecto => (
            <PreviewProject 
              key={proyecto._id} 
              proyecto={proyecto} 
            />
          ))
          : <p className="text-center text-gray-600 uppercase p-5">No hay proyectos aún</p> 
        }
        
      </div>
    </>
  )
}

export default Projects