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
                    Good problem-solving skills which helped greatly with achieving first honours in my course. Currently looking for a role as a junior or graduate
                    software developer to further my career and improve my skills. 
                </p>
                <p>
                    I'm confident and try to lead by example, always working hard and being dedicated to the task at hand. I know when it's time to focus and when I need to switch 
                    off in order to avoid burn out and be as efficient as possible. I enjoy working with others to achieve a common goal while sharing ideas.
                </p>

                <p>
                    Able to code in multiple programming languages, including C++, C# and Python, while being able to adapt to other languages quickly.
                    Inventive when problems arise in code, so solutions can be found and rectified. Organised and motivated to develop further within a software development role. 
                </p>

                <h2>Key Skills: </h2>

                <ul>
                    <li>C#, C++</li>
                    <li>.NET</li>
                    <li>OpenGL</li>
                    <li>SQL</li>
                    <li>Object-oriented programming (OOP)</li>
                    <li>Agile development</li>
                    <li>Unity</li>
                    <li>Visual Studio</li>
                </ul>
            </div>
        </div>
    )
}


export default About;