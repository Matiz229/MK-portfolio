import Home from './Home';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Separator from './Separator';
import Contact from './Contact';
import Work from './Work';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Separator param="Home"/>
      <Home/>
      <Separator param="About Me"/>
      <About/>
      <Separator param="Contact"/>
      <Contact/>
      <Separator param="Work"/>
      <Work/>
    </div>
  );
}

export default App;
