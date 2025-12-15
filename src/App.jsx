// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';


 
const App = () => {
   return (
      <>
      <BrowserRouter>
      <NavBar/>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
      </>
   );
};
 
export default App;
