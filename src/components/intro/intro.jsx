import './intro.scss'
import { init } from 'ityped'
import {  useEffect as UseEffect, useRef as UseRef } from "react";

export default function intro() {
  const textRef = UseRef();

  UseEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Suraj", "ಸೂರಜ್", "सूरज","スラジ"],
    });
  }, []);
  return (
    <div className='intro' id ='intro'>
       
      <div className="left">
      <div className="wrapper">
          <h2>Hello There, I'm</h2>
          <h1><span ref={textRef}></span></h1>
        </div>
        <a href="#portfolio">
          <img src={process.env.PUBLIC_URL + '/assets/down.png'} alt="" />
        </a>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src={process.env.PUBLIC_URL + '/assets/intro.png'} alt="" />
        </div>
      </div>
    </div>
  )
}
