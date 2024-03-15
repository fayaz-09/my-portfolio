import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoF from '../../assets/images/Logo1.png'
import LogoSub from '../../assets/images/logoSub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoF} alt="logo"/>   
            <img className="sub-logo" src={LogoSub} alt="fayaz"/>
        </Link> 
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#e6e6e6"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#e6e6e6"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faBriefcase} color="#e6e6e6"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="www.linkedin.com/in/fayaz-seedat-220b72149">
                    <FontAwesomeIcon icon={faLinkedin} color="#e6e6e6"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/fayaz-09">
                    <FontAwesomeIcon icon={faGithub} color="#e6e6e6"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar