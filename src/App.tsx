import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css'
import Login from "./Login";
import PreLoginNav from './Navigation/PreLoginNav.jsx';
import WeatherDisplay from './Weather/weather';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function HomeScreen() {
  return (
    <><div>
      <PreLoginNav />
    </div>
      <div>
        <h1>Welcome to Simplifry!</h1>
      </div>
      <div>
        <h3>Check the weather before you go!</h3>
        <WeatherDisplay />
      </div>
    </>);
}

export default App;
