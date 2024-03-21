import { Link } from 'react-router-dom';
import FLogo from '../../assets/images/FLogo.png';
import SLogo from '../../assets/images/SLogo.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'y', 'a', 'z']
    const surnameArray = ['e', 'e', 'd', 'a', 't']
    const roleArray = ['G', 'r', 'a' ,'d', 'u', 'a', 't', 'e', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e' , ' ','D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={FLogo} alt="F"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>

                <img src={SLogo} alt="S"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={surnameArray}
                idx={19}/>
                <br/>

                <AnimatedLetters letterClass={letterClass}
                strArray={roleArray}
                idx={24}/>
                </h1>

                <h2>C#/C++ Developer</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>

            <Logo/>

        </div>
    );
}

export default Home