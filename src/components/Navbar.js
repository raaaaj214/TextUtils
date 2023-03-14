import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  // const [isChecked,setIsChecked] = useState(false);
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode.backgroundColor} bg-${props.mode.backgroundColor} `}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode.color}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode.color}`} aria-current="page" href="/">{props.firstValue}</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode.color}`} href="/">{props.secondValue}</a>
        </li>
      </ul>
      {/*
      <Link to="new-path" state={{ some: "value" }} /> 
      <div class="form-check mx-3"  >
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Default
        </label>
      </div>
      <div class="form-check mx-3" >
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Red
        </label>
      </div>
      <div class="form-check mx-3" >
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label class="form-check-label" for="flexRadioDefault1">
          Blue
        </label>
      </div> */}
      <div className={`form-check form-switch text-${props.mode.backgroundColor === 'light' ? 'dark' : 'white'}`}>
        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  firstValue : PropTypes.string.isRequired,
  secondValue : PropTypes.string.isRequired,
  text : PropTypes.string

}
Navbar.defaultProps = 
{
  title : "Text Here",
  firstValue : "Text Here",
  secondValue : "Text Here",
  text : "Search Here"
}