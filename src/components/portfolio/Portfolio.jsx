import "./Portfolio.scss"

export default function Portfolio() {
  return (
    <div id="portfolio" className="Portfolio">
       <div className="left">
        <div className="imgContainer">
          <img src="assets/about.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
         <h3>About Me
         <hr></hr></h3>
         <p>I am from <b>Mangalore</b>.<br></br><br></br>
          I spend my free time usually tinkering with Frameworks or researching about <b>Game Design</b> or <b>Digital Art</b>. Also, Love to watch <b>Anime</b> and <b>Play Video Games.</b></p>
          <div className="light">
          <p><i>" heres a fun fact you didn't ask for: This website was made by me using <b>React</b> "</i></p>
          </div>
          <h3>Work
         <hr></hr></h3>
         <p>I’m currently working full-time as a Systems Engineer at <b>Tata Consultancy Services</b> under Finance Domain.</p>
         <ul>
           <li> Developing and Testing Web Based Application in an <b>Agile</b> Environment.</li>
           <li> Maintaining Code Base and Developing Components.</li>
           <li> Automating TestCases using <b>Python</b> and <b>Java</b>.</li>
           <li> Good Knowledge on Both Software Development and Software Testing Life Cycle.</li>
         </ul>
         <br></br>
         <hr></hr>
        </div>
        <a href="#skills">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
     
    </div>
  )
}
