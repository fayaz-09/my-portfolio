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
import tiles from '../../assets/images/PizzaPhantomPhil/tilesheet.png'
import map1 from '../../assets/images/PizzaPhantomPhil/tilemap1.png'
import map2 from '../../assets/images/PizzaPhantomPhil/tilemap2.png'
import map3 from '../../assets/images/PizzaPhantomPhil/tilemap3.png'
import Lighting from '../../assets/images/PizzaPhantomPhil/Lighting1.png'
import tileNorm from '../../assets/images/PizzaPhantomPhil/normal_painting.png'
import philNorm from '../../assets/images/PizzaPhantomPhil/phil_normals.png'
import lightingNorm from '../../assets/images/PizzaPhantomPhil/normal_lighting.png'

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

                <h1>Update 20/05/24</h1>

                <h2>Tilemapping</h2>

                <p>
                    Assets were also needed for creating levels and so I chose a tile based approach for level creation. This approach would allow me to create a level by painting
                    various tiles onto a grid to build a complete environment for the player to traverse. 
                </p>

                <div className="details-container">
                    <p>
                        The first step in this process was to create a spritesheet with a variety of tiles which I could then import into unity. Each tile had to be the same size
                        so they could snap to the grid smoothly and for this I chose to make the tiles 32x32 pixels in size. This approach allowed me to create multiple tile designs 
                        for a varied looking level.
                    </p>
                    <img src={tiles} className="icon"/>
                </div>

                <div className="details-container">
                    <p>
                        Once imported I spliced the spritesheet into it's individual tiles and added the tiles to a tile palette so I could begin painting on a tilemap created in the scene. I also took this time
                        to add phil to the scene so I could have a visual reference of him in the scene and his size compared to the environment.
                    </p>
                    <img src={map1} className="icon"/>
                </div>

                <p>
                    I could now begin painting tiles by selecting one within the palette and drawing it onto the tilemap. I tried to create a simple scene of a city road with a path
                    for pedestrians on the side. 
                </p>

                <div className="column-container">
                    <img src={map2} className="icon"/>
                    <img src={map3} className="icon"/>
                </div>

                <h2>Lighting</h2>

                <div className="column-container">
                    <img src={Lighting} className="icon"/>
                </div>

                <p>
                    I wasn't entirely happy with how the current lighting looks in the scene and how it interacts with the tiles. When adding a point light to the scene 
                    it does well with lighting up parts of the tiles that are within it's range, however it didn't convey the depth of the tiles well. I was familiar with various lighting
                    models from work i've done with 3D graphics programming but wasn't sure how I could apply them with 2D sprites. Doing some research I found that unity allows for
                    normal mapping of sprites which will add the depth of lighting i'm looking for.
                </p>

                <p>
                    This approach to lighting needs a seperate spritesheet containg the colour data for the normals of the tiles. Normals in 3D lighting are vectors that are perpendicular to the 
                    surface of a vertex. Essentially they are used to calculate how light bounces of the surface of an object. To get the same information for a 2D sprite you can manually
                    create these normals by taking the base spritesheet and swapping the colours for one that relates to the direction each side of the sprite is facing. This had to be done
                    for the tiles and phil as the lighting needs to apply to all the sprites the same way.
                </p>

                <div className="column-container">
                    <img src={tileNorm} className="icon"/>
                    <img src={philNorm} className="icon"/>
                </div>

                <p>
                    To add normal lighting the normal maps need to be assigned as a secondary texture for the sprites, and the light objects have a setting for normal lighting which needs to be turned on.
                    The end result is a scene where the 2D sprites appear to have a bit more depth to them. This still needs to be tweaked a bit and I will continue to improved
                    the look of it overtime by adjusting lighting values and the normal maps. The inclusion of normal mapping means I have to create normal maps for each sprite 
                    created for the game, from characters to objects and buildings.  
                </p>

                <div className="column-container">
                    <img src={lightingNorm} className="icon"/>
                </div>

                <h2>Creating a basic scene</h2>

                <div className="details-container">
                    <p>
                    Before I begin work on gameplay I needed a basic looking area for the character to move around in and test gameplay features. I created three new sprites for this,
                    one a lampost where the light objects will be placed over and the other two are house designs. These will serve as delivery locations during the testing phase.
                    I created a street where I can test movement freely with enough space to figure out the correct base movement speed.  
                    </p>
                    <img src={titleImage} className="icon"/>
                </div>

            </div>
        </div>
    )
}

export default PizzaPhil;