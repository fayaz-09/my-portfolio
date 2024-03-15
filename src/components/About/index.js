import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <div className='container about-page'>
            <div className='text-area'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p> 
                    Graduate computer games programming student with technical knowledge on a wide range of computer science topics. 
                    Good problem-solving skills which helped greatly with achieving first honours in my course. 
                </p>
                <p>
                    Able to code in multiple programming languages, including C++, C# and Python, while being able to adapt to other languages quickly.
                    Inventive when problems arise in code, so solutions can be found and rectified. Organised and motivated to develop further within a software development role. 
                </p>
            </div>
        </div>
    )
}


export default About;