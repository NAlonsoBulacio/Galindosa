"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import Header from "../../components/newComponents/Header/Header"
import Footer from "../../components/newComponents/Footer/Footer"
import ProjectsContainer from "../../components/newComponents/ProjectsContainer/ProyectsContainer"
import FlyerProjects from "../../components/newComponents/Flyers/FlyerProjects"
import { IoIosSearch } from "react-icons/io"
import { getProjects } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import loadingImg from "../../assets/ripples.svg"
import { MdCleaningServices } from "react-icons/md"
import { ambients } from "../../utils"

const Projects = () => {
  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()
  const location = useLocation()
  const [zoneFilter, setZoneFilter] = useState("")
  const [roomsFilter, setRoomsFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [projectsInView, setProjectsInView] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    dispatch(getProjects()).finally(() => setLoading(false))
  }, [dispatch])

  useEffect(() => {
    const { estado, zona, ambientes } = location.state || {}

    if (estado !== undefined) setStatusFilter(estado)
    if (zona !== undefined) setZoneFilter(zona)
    if (ambientes !== undefined) setRoomsFilter(ambientes)

    if (estado || zona || ambientes) {
      handleFilterChangeFromHome(estado, zona, ambientes)
    } else {
      setProjectsInView(projects)
    }
  }, [location.state, projects])

  const handleFilterChangeFromHome = (estado = statusFilter, zona = zoneFilter, ambientes = roomsFilter) => {
    const filteredProjects = projects.filter((project) => {
      const matchesZone = zona === "" || project.zone === zona
      const matchesStatus = estado === "" || project.status === estado
      const matchesRooms = ambientes === "" || project.rooms.some((room) => room.id === Number.parseInt(ambientes))

      return matchesZone && matchesStatus && matchesRooms
    })

    const shuffledProjects = filteredProjects.sort(() => Math.random() - 0.5)

    setProjectsInView(shuffledProjects)
  }

  const handleFilterChange = () => {
    const filteredProjects = projects.filter((project) => {
      const matchesZone = zoneFilter === "" || project.zone === zoneFilter
      const matchesStatus = statusFilter === "" || project.status === statusFilter
      const matchesRooms = roomsFilter === "" || project.rooms.some((room) => room.id === Number.parseInt(roomsFilter))

      return matchesZone && matchesStatus && matchesRooms
    })

    const shuffledProjects = filteredProjects.sort(() => Math.random() - 0.5)

    setProjectsInView(shuffledProjects)
  }

  const handleCleanFilters = () => {
    setRoomsFilter("")
    setStatusFilter("")
    setZoneFilter("")
    setProjectsInView(projects)
  }

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Proyectos Inmobiliarios en Tucumán | Galindo SA</title>
        <meta
          name="description"
          content="Explora nuestros proyectos inmobiliarios en Tucumán. Departamentos, casas y locales comerciales en las mejores zonas. Encuentra tu próxima propiedad con Galindo SA."
        />
        <meta
          name="keywords"
          content="proyectos inmobiliarios, Tucumán, Galindo SA, departamentos, casas, locales comerciales, inversión inmobiliaria"
        />
        <link rel="canonical" href="https://www.galindosa.com/proyectos" />
        <meta property="og:title" content="Proyectos Inmobiliarios en Tucumán | Galindo SA" />
        <meta
          property="og:description"
          content="Descubre nuestros proyectos inmobiliarios en Tucumán. Propiedades de alta calidad en las mejores ubicaciones."
        />
        <meta property="og:url" content="https://www.galindosa.com/proyectos" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Proyectos Inmobiliarios en Tucumán",
            description:
              "Explora nuestros proyectos inmobiliarios en Tucumán. Departamentos, casas y locales comerciales en las mejores zonas.",
            url: "https://www.galindosa.com/proyectos",
            publisher: {
              "@type": "Organization",
              name: "Galindo SA",
              logo: {
                "@type": "ImageObject",
                url: "https://www.galindosa.com/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <Header />
      <FlyerProjects />

      <main>
        <section className="flex flex-wrap justify-center items-center px-4 lg:px-10 xl:px-20 py-2 lg:py-8 space-y-4">
          <form className="w-full flex flex-wrap justify-center items-baseline lg:space-x-4 my-4 mb-8 space-y-4 lg:space-y-0">
            <fieldset className="flex flex-col items-start w-full lg:w-auto">
              <legend className="text-gray-700 font-bold mb-1">Estado</legend>
              <div className="relative w-full lg:w-56">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="select-custom text-xl border-b-2 border-gray-300 focus:outline-none focus:border-[#ffc702] appearance-none w-full pb-2"
                >
                  <option value="">Todos los Estados</option>
                  <option value="Terminado">Terminado</option>
                  <option value="En Obra">En Obra</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="fill-current h-8 w-8 text-[#ffc702]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </div>
              </div>
            </fieldset>

            <fieldset className="flex flex-col items-start w-full lg:w-auto">
              <legend className="text-gray-700 font-bold mb-1">Zona</legend>
              <div className="relative w-full lg:w-56">
                <select
                  value={zoneFilter}
                  onChange={(e) => setZoneFilter(e.target.value)}
                  className="border-b border-gray-400 text-xl focus:border-[#ffc702] focus:outline-none appearance-none w-full pb-2"
                >
                  <option value="">Todas las Zonas</option>
                  <option value="Barrio Sur">Barrio Sur</option>
                  <option value="Barrio Norte">Barrio Norte</option>
                  <option value="Yerba Buena">Yerba Buena</option>
                  <option value="Mate de Luna">Mate de Luna</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="fill-current h-8 w-8 text-[#ffc702]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </div>
              </div>
            </fieldset>

            <fieldset className="flex flex-col items-start w-full lg:w-auto">
              <legend className="text-gray-700 font-bold mb-1">Ambientes</legend>
              <div className="relative w-full lg:w-56">
                <select
                  value={roomsFilter}
                  onChange={(e) => setRoomsFilter(e.target.value)}
                  className="border-b border-gray-400 text-xl focus:border-[#ffc702] focus:outline-none appearance-none w-full pb-2"
                >
                  <option value="">Todos los Ambientes</option>
                  {ambients.map((ambient) => (
                    <option key={ambient.id} value={ambient.id}>
                      {ambient.label}
                    </option>
                  ))}
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="fill-current h-8 w-8 text-[#ffc702]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </div>
              </div>
            </fieldset>

            <div className="flex flex-col justify-end w-full lg:w-auto gap-y-2">
              <button
                onClick={handleFilterChange}
                className="bg-[#ffc702] hover:bg-[#9d882a] duration-300 text-white px-6 py-2 rounded-lg flex items-center gap-2 w-full lg:w-auto"
              >
                <IoIosSearch className="text-2xl" />
                BUSCAR AHORA
              </button>
              <button
                onClick={handleCleanFilters}
                className="bg-[#fbf9f2] hover:bg-[#ffc702] duration-300 text-gray-700 hover:text-white border-[1px] border-[#ffc702] px-6 py-2 rounded-lg flex items-center gap-2 w-full lg:w-auto"
              >
                <MdCleaningServices className="text-2xl" />
                LIMPIAR FILTROS
              </button>
            </div>
          </form>
        </section>

        <section className="flex flex-wrap justify-center items-center px-4 lg:px-10 xl:px-20 py-2 lg:py-8 space-y-4">
          <div className="w-full">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <img src={loadingImg || "/placeholder.svg"} alt="Cargando..." className="w-16 h-16" />
              </div>
            ) : projectsInView.length > 0 ? (
              <ProjectsContainer projects={projectsInView} />
            ) : (
              <p className="flex items-center justify-center text-center text-xl text-gray-700 h-64">
                No se encontraron proyectos. Por favor, prueba con otros parámetros de búsqueda.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Projects

