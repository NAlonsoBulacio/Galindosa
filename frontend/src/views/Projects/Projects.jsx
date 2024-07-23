import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/newComponents/Header/Header";
import Footer from "../../components/newComponents/Footer/Footer";
import ProjectsContainer from "../../components/newComponents/ProjectsContainer/ProyectsContainer";
import FlyerProjects from "../../components/newComponents/Flyers/FlyerProjects";
import { IoIosSearch } from "react-icons/io";
import { getProjects } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import loading from "../../assets/ripples.svg"; // Asegúrate de que la ruta sea correcta
import {projects} from "../../utils/projects"
const Projects = () => {
  // const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const location = useLocation();
  const [zoneFilter, setZoneFilter] = useState("");
  const [roomsFilter, setRoomsFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [projectsInView, setProjectsInView] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(getProjects()).finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    const { estado, zona, ambientes } = location.state || {};

    if (estado !== undefined) setStatusFilter(estado);
    if (zona !== undefined) setZoneFilter(zona);
    if (ambientes !== undefined) setRoomsFilter(ambientes);

    if (estado || zona || ambientes) {
      handleFilterChangeFromHome(estado, zona, ambientes);
    } else {
      setProjectsInView(projects);
    }
  }, [location.state, projects]);

  const handleFilterChangeFromHome = (
    estado = statusFilter,
    zona = zoneFilter,
    ambientes = roomsFilter
  ) => {
    const filteredProjects = projects.filter((project) => {
      return (
        (zona === "" || project.zone === zona) &&
        (ambientes === "" || project.rooms === ambientes) &&
        (estado === "" || project.status === estado)
      );
    });

    setProjectsInView(filteredProjects);
  };

  const handleFilterChange = () => {
    const filteredProjects = projects.filter((project) => {
      return (
        (zoneFilter === "" || project.zone === zoneFilter) &&
        (roomsFilter === "" || project.rooms === roomsFilter) &&
        (statusFilter === "" || project.status === statusFilter)
      );
    });

    setProjectsInView(filteredProjects);
  };

  return (
    <div>
      <Header />
      <FlyerProjects />
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-10 xl:px-20 py-2 lg:py-8 space-y-4">
        <div className="w-full flex flex-wrap justify-center items-center space-y-2 lg:space-y-4 py-6">
          <h1 className="w-full text-center poppins-regular text-xl lg:text-4xl text-[#fbcc00] tracking-[0.2rem]">
            Tu nuevo hogar te está esperando, buscalo acá...
          </h1>
        </div>

        <div className="w-full flex justify-center items-baseline space-x-4 mb-8">
          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-bold mb-1">Estado</label>
            <div className="relative w-40 lg:w-56">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border-b border-gray-400 focus:border-[#fbcc00] focus:outline-none appearance-none w-full pb-2"
              >
                <option value="">Todos los Estados</option>
                <option value="Terminado">Terminado</option>
                <option value="En Pozo">En Pozo</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="fill-current h-4 w-4 text-[#fbcc00]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-bold mb-1">Zona</label>
            <div className="relative w-40 lg:w-56">
              <select
                value={zoneFilter}
                onChange={(e) => setZoneFilter(e.target.value)}
                className="border-b border-gray-400 focus:border-[#fbcc00] focus:outline-none appearance-none w-full pb-2"
              >
                <option value="">Todas las Zonas</option>
                <option value="Barrio Sur">Barrio Sur</option>
                <option value="Barrio Norte">Barrio Norte</option>
                <option value="Yerba Buena">Yerba Buena</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="fill-current h-4 w-4 text-[#fbcc00]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700 font-bold mb-1">Ambientes</label>
            <div className="relative w-40 lg:w-56">
              <select
                value={roomsFilter}
                onChange={(e) => setRoomsFilter(e.target.value)}
                className="border-b border-gray-400 focus:border-[#fbcc00] focus:outline-none appearance-none w-full pb-2"
              >
                <option value="">Todos los Ambientes</option>
                <option value="1 ambiente">1 ambiente</option>
                <option value="2 ambientes">2 ambientes</option>
                <option value="3 ambientes">3 ambientes</option>
                <option value="4 ambientes">4 ambientes</option>
                <option value="5 ambientes">5 ambientes</option>
                <option value="Casa">Casa</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="fill-current h-4 w-4 text-[#fbcc00]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end ">
            <button
              onClick={handleFilterChange}
              className="bg-[#fbcc00] hover:bg-[#9d882a] duration-300 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <IoIosSearch className="text-2xl" />
              BUSCAR AHORA
            </button>
          </div>
        </div>

        <div className="w-full">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <img src={loading} alt="Loading..." className="w-16 h-16" />
            </div>
          ) : projectsInView.length > 0 ? (
            <ProjectsContainer projects={projectsInView} />
          ) : (
            <div className="flex items-center justify-center text-center text-xl text-gray-700 h-64">
              <p>
                No se encontraron proyectos. Por favor, prueba con otros
                parámetros de búsqueda.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
