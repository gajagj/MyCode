import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RegisterCar from './components/RegisterCar';
import SearchCar from './components/SearchCar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/register" component={RegisterCar}/>
        <Route  path="/search" component={SearchCar}/>
      <Route path="/" component={RegisterCar}/>
      </Switch>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
