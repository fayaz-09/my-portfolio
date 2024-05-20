import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import spaceInvader from '../../assets/images/spaceInvaders.png'
import shopApp from '../../assets/images/ShopApp.png'
import soulControl from '../../assets/images/healthBars.PNG'
import comAlley from '../../assets/images/combatAlley.jpg'
import PPP from '../../assets/images//PizzaPhantomPhil/MainImg.png'
import { NavLink } from 'react-router-dom';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
     <div className="container project-page">
        <div className="heading">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={15}
                />
            </h1>
        </div>
        <div className="project-display">
            <NavLink to="/shoppingApp">
                <div className="single grow">
                    <div className="image-holder">
                        <img src={PPP}/>
                    </div>
                    
                    <h1>Pizza Phantom Phil DevLog</h1>
                    <p>
                        Currently working on making a 2D isometric game within unity and will be periodically detailing my progress. The goal of the game is to make and deliver pizzas 
                        to fulfill customer orders while avoiding various obstacles. Each fulfilled order will increase the players movement speed allowing them to more efficiently complete
                        each level. 
                    </p>
                    <ul>
                        <li className="grow">C#</li>
                        <li>Visual Studio</li>
                        <li>Unity</li>
                        <li>OOP</li>
                    </ul>
                </div>
            </NavLink>
            <NavLink to="/shoppingApp">
                <div className="single grow">
                    <div className="image-holder">
                        <img src={shopApp}/>
                    </div>
                    
                    <h1>Shopping App</h1>
                    <p>
                        Multi platform shopping application created with .NET MAUI. Features a cart which users can add and remove items from. Total price will dynamically update
                        as items are removed and added to the cart. Multiple pages for items belonging to different categories and users can add multiple of the same item to the cart. 
                    </p>
                    <ul>
                        <li className="grow">C#</li>
                        <li>Visual Studio</li>
                        <li>.NET MAUI</li>
                        <li>MVVM</li>
                    </ul>
                </div>
            </NavLink>
            <NavLink to="/soulControl">
                <div className="single grow">
                    <div className="image-holder">
                        <img src={soulControl}/>
                    </div>
                    
                    <h1>Soul control</h1>
                    <p>
                        Final year university project which was created to explore various AI methodologies. The end goal was to examine which ones work best for use in a 
                        game to control enemy behaviour when in and out of combat with the player.
                    </p>
                    <ul>
                        <li className="grow">C#</li>
                        <li>Unity</li>
                        <li>OOP</li>
                    </ul>
                </div>
            </NavLink>
            <a target="_blank" rel="noreferrer" href="https://github.com/fayaz-09/SpaceInvadersRecreated">
                <div className="single grow">
                    <div className="image-holder">
                        <img src={spaceInvader}/>
                    </div>
                    
                    <h1>Space Invaders</h1>
                    <p>
                        Recreaction of the classic game space invaders created with C++ and SFML. University project which focusses on using object orientated programming 
                        (OOP) principles to create classes, with inheritance, for the various aspects of the game. 
                    </p>
                    <ul>
                        <li className="grow">C++</li>
                        <li>Visual Studio</li>
                        <li>OOP</li>
                    </ul>
                </div>
            </a>
            <NavLink to="/combatAlley">
                <div className="single grow">
                    <div className="image-holder">
                        <img src={comAlley}/>
                    </div>
                    
                    <h1>Combat Alley</h1>
                    <p>
                        Endless runner mobile game available on the google play store for android devices. Made with unity and C# for a university project
                        , created to explore the concepts of object instantiation and destruction.
                    </p>
                    <ul>
                        <li className="grow">C#</li>
                        <li>Unity</li>
                        <li>OOP</li>
                    </ul>
                </div>
            </NavLink>
        </div>
     </div>   
    )
}

export default Projects;