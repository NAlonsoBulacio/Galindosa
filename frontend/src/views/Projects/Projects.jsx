import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"; // Importar Helmet para SEO
import Header from "../../components/newComponents/Header/Header";
import Footer from "../../components/newComponents/Footer/Footer";
import ProjectsContainer from "../../components/newComponents/ProjectsContainer/ProyectsContainer";
import FlyerProjects from "../../components/newComponents/Flyers/FlyerProjects";
import { IoIosSearch } from "react-icons/io";
import { getProjects } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import loadingImg from "../../assets/ripples.svg"; 
import { MdCleaningServices } from "react-icons/md";

const Projects = () => {
  const projects = useSelector((state) => state.projects);
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
        (ambientes === "" || project.rooms.includes(ambientes)) &&
        (estado === "" || project.status === estado)
      );
    });
  
    setProjectsInView(filteredProjects);
  };

  const handleFilterChange = () => {
    const filteredProjects = projects.filter((project) => {
      return (
        (zoneFilter === "" || project.zone === zoneFilter) &&
        (roomsFilter === "" || project.rooms.includes(roomsFilter)) &&
        (statusFilter === "" || project.status === statusFilter)
      );
    });
  
    setProjectsInView(filteredProjects);
  };

  const handleCleanFilters = () => {
    setRoomsFilter("");
    setStatusFilter("");
    setZoneFilter("");
    setProjectsInView(projects);
  };

  return (
    <div className="overflow-hidden">
      {/* Meta tags y estructura para SEO */}
      <Helmet>
        <title>Proyectos - Constructora N°1 de Tucumán</title>
        <meta name="description" content="Descubre nuestros proyectos destacados en Tucumán." />
        <meta name="keywords" content="proyectos, Tucumán, constructora" />
      </Helmet>

      {/* Header Component */}
      <Header />
      <FlyerProjects />

      <div className="flex flex-wrap justify-center items-center px-4 lg:px-10 xl:px-20 py-2 lg:py-8 space-y-4">
        <div className="w-full flex flex-wrap justify-center items-baseline lg:space-x-4 my-4 mb-8 space-y-4 lg:space-y-0">
          {/* Filtros de búsqueda */}
          {/* (Aquí incluirás el código para tus filtros como en el componente original) */}
        </div>

        <div className="w-full">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <img src={loadingImg} alt="Loading..." className="w-16 h-16" />
            </div>
          ) : projectsInView.length > 0 ? (
            <ProjectsContainer projects={projectsInView} />
          ) : (
            <div className="flex items-center justify-center text-center text-xl text-gray-700 h-64">
              <p>
                No se encontraron proyectos. Por favor, prueba con otros parámetros de búsqueda.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
