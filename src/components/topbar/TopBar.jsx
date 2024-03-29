import "./TopBar.scss"
import { Mail } from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Suraj
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>suraj.bhandarkar13@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="burger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}