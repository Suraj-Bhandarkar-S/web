import "./skills.scss";
import SkillsList from "../skillsList/skillsList";
import { useEffect as UseEffect, useState as UseState} from "react";
import {
    ProgrammingLanguage,
    WebDev,
    Framework,
    AutoPortfolio,
   
  } from "../../data";
export default function skills() {
    const [selected, setSelected] = UseState("Programming Language");
    const [data, setData] = UseState([]);
    const list = [
      {
        id: "Programming Language",
        title: "Programming Language",
      },
      {
        id: "Front End",
        title: "Front End",
      },
      {
        id: "Frame Work",
        title: "Frame Work",
      },
      {
        id: "Automation",
        title: "Automation",
      },
     
    ];
  
    UseEffect(() => {
      switch (selected) {
        case "Programming Langauge":
          setData(ProgrammingLanguage);
          break;
        case "Front End":
          setData(WebDev);
          break;
        case "Frame Work":
          setData(Framework);
          break;
        case "Automation":
          setData(AutoPortfolio);
          break;
 
        default:
          setData(ProgrammingLanguage);
      }
    }, [selected]);
  return (
    <div className="skills" id="skills">
          
        <h1>Skills</h1>
      
      <ul>
        {list.map((item) => (
          <SkillsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
          </div>
        ))}
      </div>
      <p> Icons by<a href="https://www.flaticon.com/free-icons" > <b>Freepik - Flaticon</b></a> </p>
      <img src="assets/Skills.png" alt="" />
    </div>
 
  );
}
