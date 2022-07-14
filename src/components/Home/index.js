import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['','E', 'm', 'e', 'r', 's', 'o', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  const contactArray = ['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E' ]

  useEffect (() => {
    let timeoutld = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)

    return () => {
      clearTimeout(timeoutld)
    }
  }, [])



  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScritp Expert / Youtube</h2>
          <Link to="/contact" className="flat-button">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={24}
            />
          </Link>
        </div>
        <div className="skills-charts">
          <div id="myCanvasContainer">
            <canvas width="500" height="500" id="myCanvas">
              <ul>
                <li>
                  <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">
                    HTML 5
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                    target="_blank" rel="noreferrer" 
                    >
                    CSS3
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/JavaScript"
                    target="_blank" rel="noreferrer"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/JavaScript"
                    target="_blank" rel="noreferrer"
                  >
                    TypeScript
                  </a>
                </li>
                <li>
                  <a
                    data-weight="24"
                    href="https://en.wikipedia.org/wiki/Representational_state_transfer"
                    target="_blank" rel="noreferrer"
                  >
                    REST
                  </a>
                </li>
                <li>
                  <a
                    data-weight="14"
                    href="https://en.wikipedia.org/wiki/JSON"
                    target="_blank" rel="noreferrer"
                  >
                    JSON
                  </a>
                </li>
                <li>
                  <a
                    data-weight="13"
                    href="https://en.wikipedia.org/wiki/XML"
                    target="_blank" rel="noreferrer"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    data-weight="27"
                    href="https://en.wikipedia.org/wiki/AngularJS"
                    target="_blank" rel="noreferrer"
                  >
                    Angular 2+
                  </a>
                </li>
                <li>
                  <a
                    data-weight="26"
                    href="https://en.wikipedia.org/wiki/WordPress"
                    target="_blank" rel="noreferrer"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    data-weight="21"
                    href="https://en.wikipedia.org/wiki/Node.js"
                    target="_blank" rel="noreferrer"
                  >
                    Jasmine
                  </a>
                </li>
                <li>
                  <a
                    data-weight="17"
                    href="https://en.wikipedia.org/wiki/Git"
                    target="_blank" rel="noreferrer"
                  >
                    Git
                  </a>
                </li>
                <li>
                  <a data-weight="17" href="/" target="_blank">
                    _lodash
                  </a>
                </li>
                <li>
                  <a
                    data-weight="23"
                    href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                    target="_blank" rel="noreferrer"
                  >
                    Bootstrap
                  </a>
                </li>
                <li>
                  <a
                    data-weight="15"
                    href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
                    target="_blank" rel="noreferrer"
                  >
                    SASS
                  </a>
                </li>
                <li>
                  <a
                    data-weight="20"
                    href="https://en.wikipedia.org/wiki/Responsive_web_design"
                    target="_blank" rel="noreferrer"
                  >
                    RxJs
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="https://en.wikipedia.org/wiki/JQuery"
                    target="_blank" rel="noreferrer"
                  >
                    jQuery
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="http://mongoosejs.com/"
                    target="_blank" rel="noreferrer"
                  >
                    Webpack
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="https://karma-runner.github.io/1.0/index.html"
                    target="_blank" rel="noreferrer"
                  >
                    Karma
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="http://gulpjs.com/" target="_blank" rel="noreferrer">
                    Gulp
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="https://www.npmjs.com/"
                    target="_blank" rel="noreferrer"
                  >
                    npm
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="https://bower.io/" target="_blank" rel="noreferrer">
                    Bower
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="https://en.wikipedia.org/wiki/BEM"
                    target="_blank" rel="noreferrer"
                  >
                    BEM
                  </a>
                </li>
              </ul>
            </canvas>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}



export default Home