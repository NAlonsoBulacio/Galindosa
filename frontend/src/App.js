import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import AboutUs from "./views/AboutUs/AboutUs";
import Projects from "./views/Projects/Projects";
import Project from "./views/Project/Project";
import WhatsAppButton from "./components/Whatsapp/WhatsappButton";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/sobre-nosotros" component={AboutUs} />
      {/* <Route exact path="/:id" component={LandingPage} /> */}
      <Route exact path="/proyectos" component={Projects} />
      <Route exact path="/proyecto/:slug" component={Project} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
