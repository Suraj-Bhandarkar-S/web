import React from 'react';
import { useState as UseState } from "react";
import "./projects.scss";

export default function projects() {
    const [currentSlide, setCurrentSlide] = UseState(0);
    const data = [
      {
        id: "1",
        icon: "https://github.com/Suraj-Bhandarkar-S/Django-Grievance-Redressal-System",
        title: "Django - Grievance Redressal System Full Stack Project ",
        desc:
          "An application to Log, monitor, track and resolve the Grievances in few button clicks.",
        button:"More Info @ GitHub",
        img:
          "./assets/GRS-BG.png",
      },
      {
        id: "2",
        icon: "https://play.google.com/store/apps/details?id=com.Jarus.com.ACarGame",
        title: "A Car Game - Unity3D Game Engine",
        desc:
          "A 2D Video Game Made for Smart Phones using Unity3D Game Engine. Available on Google Play Store.",
        button:"Download Now",
        img:
          "./assets/CarGame.png",
      },
      {
        id: "3",
        icon: "https://github.com/Suraj-Bhandarkar-S/web",
        title: "The Website that your Scrolling :)",
        desc:
          "My Personal Portfolio WebSite Made using React JS and Scss",
          button:"WebSite Code @ GithUB",
        img:
          "./assets/intro.png",
      },
    ];
  
    const handleClick = (way) => {
      way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.icon} class="button">{d.button}</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={process.env.PUBLIC_URL + '/assets/arrow.png'}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={process.env.PUBLIC_URL + '/assets/arrow.png'}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />

    </div>
  )
}
