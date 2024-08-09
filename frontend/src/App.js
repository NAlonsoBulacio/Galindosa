import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import AboutUs from "./views/AboutUs/AboutUs";
import Projects from "./views/Projects/Projects";
import Project from "./views/Project/Project";
import WhatsAppButton from "./components/Whatsapp/WhatsappButton";
import PropertiesBdd from "./views/BDD/PropertiesBdd";
import ProductForm from "./views/BDD/ProductForm/ProductForm";
import News from "./views/News/News";
import PropertyDetail from "./views/BDD/PropertyDetail";
import NewsDetail from "./views/NewsDetail/NewsDetail";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/sobre-nosotros" component={AboutUs} />
      <Route exact path="/proyectos" component={Projects} />
      <Route exact path="/proyecto/:slug" component={Project} />
      <Route exact path="/proyectos-bdd" component={PropertiesBdd} />
      <Route exact path="/cargar-proyecto" component={ProductForm} />
      <Route exact path="/proyecto-detalle/:slug" component={PropertyDetail} />
      <Route exact path="/novedades" component={News} />
      <Route exact path="/novedades/:slug" component={NewsDetail} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
