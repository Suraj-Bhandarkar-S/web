import TopBar from "./components/topbar/TopBar";
import Intro  from "./components/intro/intro";
import Portfolio  from "./components/portfolio/Portfolio";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Menu from "./components/menu/Menu";
import "./App.scss"
import { useState } from "react";
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
   <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Skills/>
       <Projects/>
     </div>
    </div>
  );
}

export default App;
