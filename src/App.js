import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import notFound from './pages/notFound';
import RegisterForm from './pages/RegisterForm';
import MovieDetails from './pages/MovieDetails';
import Nav from './components/Nav';
import { Pagination } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <CustomNavbar/>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={RegisterForm} />
          <Route exact path={"/MovieDetails/:id"} component={MovieDetails} />
          <Route exact path={"*"} component={notFound} />
          <Pagination/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
