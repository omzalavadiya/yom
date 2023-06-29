import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Component/Home/Header';
import Index from './Component/Home';
import Footer from './Component/Home/Footer';
import Services from './Component/Pages/Service';
import Clients from './Component/Pages/Client';
import Blog from './Component/Blog/Blog';
import Blog_gird from './Component/Blog/Blog_gird';
import Blog_singal from './Component/Blog/Blog_singal';
import About from './Component/About/About';
import Three_columns from './Component/Work/Three_column';
import Four_columns from './Component/Work/Four_column';
import Singal_project from './Component/Work/Singal_project';
import Contact from './Component/Contact/Contact';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="/header" element={ <Header/> } />
        <Route path="/footer" element={ <Footer/> } />
        <Route path="/Services" element={ <Services/> } />
        <Route path="/Clients" element={ <Clients/> } />
        <Route path="/Blog" element={ <Blog/> } />
        <Route path="/Blog_gird" element={ <Blog_gird/> } />
        <Route path="/Blog_singal" element={ <Blog_singal/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Three_columns" element={ <Three_columns/> } />
        <Route path="/Four_columns" element={ <Four_columns/> } />
        <Route path="/Singal_project" element={ <Singal_project/> } />
        <Route path="/Contact" element={ <Contact/> } />







      </Routes>      
    </>
  );
}

export default App;
