import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import mainImage from '../../assets/images/healthBars.PNG'
import React from 'react';
import ReactPlayer from 'react-player';

const SoulControl = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <div className="container details-page">
            <div className="heading">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S', 'o', 'u', 'l', ' ', 'C', 'o', 'n', 't', 'r', 'o', 'l']}
                        idx={15}
                    />
                </h1>
            </div>

            <div className="details-display">

                <img className="splash-img" src={mainImage}/>

                <a target="_blank" rel="noreferrer" href="https://github.com/fayaz-09/Soul-Control">
                    <FontAwesomeIcon icon={faGithub} color="#b30fff"/>
                </a>

                <p>
                    Soul control is a third person action game, featuring hack and slash inspired gameplay. The main aim of the project was to create a game which allowed
                    the player to interact with enemies that are controlled by a variety of different AI implementations. The game was designed to be a test project which
                    explores the use of these implementations and how an AI controlled enemy behaves based on the system it's given.
                </p>

                <p>
                    While the game was created for my final year in university, i'm actively continuing development on the project in my free time as I one day wish to have
                    the game in a state which would be acceptable for potential players. All aspects of the game were created by me outside of the character models and as
                    such I learnt a large amount during development and wish to learn more as I work on it. 
                </p>

                <h1>Demo</h1>

                <ReactPlayer 
                    url='video/testDemo.mp4'
                    width='100%'
                    height='auto'
                    controls={true}
                />

                <h1>Gameplay</h1>

                <p>
                    The core gameplay revolves around the player being able to select a number of enemies to spawn into an arena, where they can engage them in combat. 
                    Once the player is loaded into the game a menu is displayed which allows them to select the amount of each enemy type they wish to fight.
                    Each type of enemy has multiple variations which relate to the AI implementation they will use, and multiple can be selected of each type.
                    Currently there are two main enemy types, a sword enemy which will aggressively chase the player and attack once in melee range. The second is
                    a mage enemy which attacks the player from a distance with projectiles, as well as having the ability to heal ally enemies on low health.
                </p>

                <p>
                    Once the player starts the game the enemies are spawned in using object pooling to save on resources. There are a number of actions the player can
                    perform to control the playable character, the basics being movement with wasd and jumping with the spacebar. The game has a third person perspective 
                    like most character action games, and as such the camera follows the player at all times and will revert back to facing the direction the player character 
                    is if it’s not moved manually. The core system is the combat where the player can perform a chain of three attacks in sequence, with the ability to stop at any 
                    point during the chain. 
                </p>

                <h1>AI</h1>

                <p>
                    AI was at the core of the project and as such a lot of research was done to identify different implementations, along with the core principles of how they 
                    should work.
                </p>

                <h1>Behaviour Trees (BT)</h1>

                <p>
                    Behaviour trees control the logic behind an ai character by using nodes organised in a standard tree pattern with parent and child nodes. This method uses a
                    combination of varying types of nodes. The selector, sequence, decision and action nodes, organised into a tree pattern in order to create a set of behaviours 
                    which will be followed. The action nodes are what drive the behaviour and are where the functions in the enemy class are called to run a specific action, such 
                    as moving towards the player. The decision nodes are therefore used to check if certain conditions are met that will allow for the running of the following 
                    action node.
                </p>

                <h1>Finite state machine (FSM)</h1>

                <p>
                    Basic state machines are at the core of game AI as they allow us to control the behaviour of an ai entity in various situations. A basic state machine 
                    has various states which a character will only be in one of at any given time. Actions are associated with each state and if they remain in this state 
                    that action will be carried out indefinitely until a specific condition is fulfilled which will change the state. In a fsm implementation each state 
                    individually controls how it links to other states. This means each state needs to check whether a condition is met and then proceed to either carry out 
                    their own action or transition to another state. The first state created was the patrol state and perfectly highlights how these states work. It simply runs 
                    the enemy patrol function then checks whether or not it detects a player within its view range. If it does it will transition to the chase state and if not 
                    will continue to run.
                </p>

                <h1>Hierarchical State Machines (HSM)</h1>

                <p>
                    Like an FSM implementation however states themselves can be another state machine. an example of this is having a non-combat state where within that state 
                    you can have a state machine which switches between waiting and patrolling. The creation of a fsm system was built upon to create a hierarchical state machine 
                    implementation. This allows for more complex AI behaviour as the amount of repeated transitions can be reduced by using for example a combat state which houses
                    multiple states within itself. These states then also implement the combat states behaviour as well as their own meaning a transition which may have been in all 
                    the child states only needs to be included in the combat state.
                </p>

                <h1>Goal oriented action planning (GOAP)</h1>

                <p>
                    A goal-oriented approach to ai development puts focus on the end goal of each action. For example, if an ai controlled entity is low on health, depending on how 
                    low it is it may shift its current goal from attacking the player to finding an item to gain health. GOAP development consists of assigning values to the 
                    actions the ai can take. This value is a priority number and depending on the current game state multiple actions can be available to an AI agent at a single 
                    time but it will always undertake the one which has the higher priority. The priority value of an action can also change depending on the given circumstance, 
                    for example if an enemy has low health the priority of finding health can be increased so that action takes precedent over others.
                </p>
            </div>
        </div>
    )
} 

export default SoulControl;