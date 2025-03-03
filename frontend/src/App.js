import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import WhatsAppButton from "./components/Whatsapp/WhatsappButton";

const Home = lazy(() => import("./views/Home/Home"));
const Contact = lazy(() => import("./views/Contact/Contact"));
const AboutUs = lazy(() => import("./views/AboutUs/AboutUs"));
const Projects = lazy(() => import("./views/Projects/Projects"));
const Project = lazy(() => import("./views/Project/Project"));
const PropertiesBdd = lazy(() => import("./views/BDD/PropertiesBdd"));
const ProductForm = lazy(() => import("./views/BDD/ProductForm/ProductForm"));
const News = lazy(() => import("./views/News/News"));
const PropertyDetail = lazy(() => import("./views/BDD/PropertyDetail"));
const NewsDetail = lazy(() => import("./views/NewsDetail/NewsDetail"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="w-screen h-screen flex justify-center items-center"><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47lcco3qyluewhqihzbh71yi0c43vqdf9xjjtub5vy&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
      </div>}>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/sobre-nosotros" component={AboutUs} />
        <Route exact path="/edificios" component={Projects} />
        <Route exact path="/proyecto/:slug" component={Project} />
        <Route exact path="/proyectos-bdd" component={PropertiesBdd} />
        <Route exact path="/cargar-proyecto" component={ProductForm} />
        <Route
          exact
          path="/proyecto-detalle/:slug"
          component={PropertyDetail}
        />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/novedades/:slug" component={NewsDetail} />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}

export default App;
