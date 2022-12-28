import "./App.css";
import HomePage from "./home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";
import Book from "./components/watch/Book";
import AllBook from "./components/watch/AllBook";
import Galeria from "./components/watch/GaleriBook";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route
                        path="/singlepage/:id"
                        component={SinglePage}
                        exact
                    />
                    <Route
                        path="/:ultimas_publicaciones"
                        component={Galeria}
                        exact
                    />
                    <Route
                        path="/:libros_mas_leidos"
                        component={Galeria}
                        exact
                    />
                    <Route
                        path="/:libros_recomendados"
                        component={Galeria}
                        exact
                    />
                    <Route path="/singlepage/book/:id" component={Book} exact />
                    <Route exact path="/login" component={AllBook} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
