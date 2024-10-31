import React from "react";
import Footer from "../../components/newComponents/Footer/Footer";
import Header from "../../components/newComponents/Header/Header";
import FlyerNews from "../../components/newComponents/Flyers/FlyerNews";
import NewsCard from "../../components/newComponents/NewsCard/NewsCard";
import NewsDetail from "../NewsDetail/NewsDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { newsData } from "../../utils/newsData";


const News = () => {
  return (
    <Router>
      <Header />
      <FlyerNews />
      <Switch>
        <Route exact path="/novedades">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-12">
            {newsData.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>
        </Route>
        <Route path="/novedades/:slug">
          <NewsDetail newsData={newsData} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default News;
