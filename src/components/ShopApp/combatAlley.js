import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import titleImage from '../../assets/images/combatAlley.jpg'
import gameplayImage from '../../assets/images/combatAlley/CombatAlley1.jpg'
import gameplayImage2 from '../../assets/images/combatAlley/CombatAlley2.jpg'
import jumpImage from '../../assets/images/combatAlley/jump_button.png'
import atkImage from '../../assets/images/combatAlley/attack_button.png'
import rangeImage from '../../assets/images/combatAlley/throw_button.png'
import en1Image from '../../assets/images/combatAlley/Enemy_Spear.png'
import en2Image from '../../assets/images/combatAlley/Enemy_Spear_charge.png'
import en3Image from '../../assets/images/combatAlley/Enemy_Spear_Forward.png'
import en4Image from '../../assets/images/combatAlley/Enemy_1.png'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const CombatAlley = () => {

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
                        strArray={['C', 'o', 'm', 'b', 'a', 't', '', 'A', 'l', 'l', 'e', 'y']}
                        idx={15}
                    />
                </h1>
            </div>

            <div className="details-display">

                <img className="splash-img" src={titleImage}/>

                <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.Fayaz.CombatAlley&pcampaignid=web_share">
                    <FontAwesomeIcon icon={faGooglePlay} color="#b30fff"/>
                </a>

                <p>
                    Combat alley is a side scrolling endless runner with beat em up elements, for android devices and is available for download on the google play store. 
                    The goal is for the player to get as far as possible without taking a hit from one of the various enemies while also avoiding the obstacles on screen.  
                </p>

                <h1>Gameplay</h1>
                <img src={gameplayImage} className='splash-img'/>
                
                <div className="details-container">
                    <img src={jumpImage} className="icon"/>
                    <p>
                        The playable character of the game has three main actions it can perform by touching one of the interactable buttons on screen. The jump button 
                        allows the player to avoid the endlessly spawning obstacles while navigating the level.
                    </p>
                </div>

                <div className="details-container">
                    <img src={atkImage} className="icon"/>
                    <p>
                        The attack button performs a different action depending on whether the player is on the ground or in the air. On the ground the player can perform a 
                        straight punch to defeat enemies that might be in the way. In the air however the action performed is a divekick which not only acts as an attack against 
                        enemies waiting below the player, but changes the momentum downwards during a jump which will allow the player to land quicker.
                    </p>
                </div>

                <div className="details-container">
                    <img src={rangeImage} className="icon"/>
                    <p>
                        Lastly the range attack button allows the player to attack enemies safely from a distance. To balance this attack from being too powerful, it's on a cooldown 
                        so the player will have to wait a few seconds before they can use it again.
                    </p>
                </div>

                <h1>Enemies</h1>
                
                <div className="column-container">
                    <img src={en1Image} className="icon"/>
                    <img src={en2Image} className="icon"/>
                    <img src={en3Image} className="icon"/>
                </div>

                <div className="details-container">
                    <img src={en4Image} className="icon"/>
                    <p>
                        There are two enemy types players will encounter in the game. The first is a melee based enemy which uses spears to attack the player when they get 
                        close. This enemy has two different attacks the player will have to look out for, a upwards thrust and a forward thrust. The forward thrust is difficult 
                        to avoid if the player remains on the ground while the upward thrust will only hit the player if they’re above the enemy. As the player approaches the 
                        spear will flash red to indicate an upward attack or white for a forward one, allowing the player to change what they do based on the incoming attack. 
                        The second enemy is a simple projectile enemy which shoots at the player once in sight, and will only fire at a set interval which will allow the player 
                        to dodge.
                    </p>
                </div>

                <h1>Level Creation</h1>
                <img src={gameplayImage2} className='splash-img'/>

                <p>
                    At the core of an endless runner is the system which controls what appears next in front of the player. As the player advances through the level, new pieces of the 
                    level are spawned in front of them just out of their sight, while portions they've passed will be destroyed. Object instantiation and destruction is used to create 
                    this system and multiple level parts, which are a variety of prefabs with varying obstacle layouts, are chosen randomly to be spawned in front of the player. This 
                    creates a system where the level will keep going endlessly without the player being able to see what's happening in the background.
                </p>

            </div>

        </div>
    )
}

export default CombatAlley;