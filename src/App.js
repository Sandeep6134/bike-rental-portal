import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingBike from './pages/BookingBike';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Route path="/" exact  component={Login} />  
          <Route path="/bikes" component={Home } />
          <Route path="/register"  component={Register} />
          <Route path="/booking/:bikeid"  component={BookingBike} />

      </BrowserRouter >
    </div>
  );
}

export default App;
