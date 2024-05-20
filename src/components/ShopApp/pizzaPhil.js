import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import titleImage from '../../assets/images/PizzaPhantomPhil/MainImg.png'
import baseSprite from '../../assets/images/PizzaPhantomPhil/BaseChar.png'
import philT from '../../assets/images/PizzaPhantomPhil/philForward.png'
import philA from '../../assets/images/PizzaPhantomPhil/philAway.png'
import philAll from '../../assets/images/PizzaPhantomPhil/philAll.png'


const PizzaPhil = () => {
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
                        strArray={['P', 'i', 'z', 'z', 'a', ' ', 'P', 'h', 'a', 'n', 't', 'o', 'm', ' ', 'P', 'h', 'i', 'l']}
                        idx={15}
                    />
                </h1>
            </div>

            <div className="details-display">

                <img className="splash-img" src={titleImage}/>

                <p>
                    Welcome to my DevLog for a game I'm curently working on in my spare time. I will be periodically updating this page as I make progress on it's development.
                    Pizza Phantom Phil is a 2D isometric game which features, the playable character, Phil a ghost who won't rest until he delivers pizza to those who need it.
                    The core gameplay will be based on finding ingredients to make a pizza that fulfills a customers order and then deliver the pizza before time runs out. The player
                    will have multiple orders to deliver at any time and have to avoid a variety of obstacles as they travel to each destination.   
                </p>

                <h1>Update 17/05/24</h1>

                <h2>Sprite work</h2>
                <p>My first step in development was to create a game design document (GDD) which included the development process and which tasks/ jobs i would need to complete
                first. Since im making a 2D sprite based game I decided I would first need to learn how to even create sprites in an isometric perspective. This was a long process
                as i'm a programmer mainly and not the greatest artist, however I was determined to create the assets for the game myself and spent a good few hours a day across two
                weeks looking at reference material and drawing practice sprites. </p>

                <div className="column-container">
                    <img src={baseSprite} className="icon"/>
                    <img src={philT} className="icon"/>
                    <img src={philA} className="icon"/>
                </div>

                <p>Once I was more confident in my character sprite creation I began work on the playable character sprite Phil. This process started by first creating the 
                    general outline of phil in an isometric perspective. I refined this outline by iterating on it multiple times until I reached a shape which fit. With the outline
                    complete I started adding details to make phil a unique character who stands out. I tried to incorporate some elements of a pizza delivery driver in his design 
                    while still making him a ghostly figure. Because the game is 2D a seperate sprite is also needed for when a character is facing a different direction, which meant I
                    had to create another sprite for when Phil is facing away from the camera. 
                </p>

                <div className="details-container">
                    <img src={philAll} className="icon"/>
                    <p>
                        I ended work on Phils sprite by making a sprite sheet which contains a sprite for each direction I need phil to face.
                        I can import this sheet into unity and use it for creating a playable character game object. While the work on Phils sprite will be improved in the
                        future, i'm fine with stopping here as it's now in a state I can use it for gameplay programming and development.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default PizzaPhil;