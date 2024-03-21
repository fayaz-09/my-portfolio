import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import shopImage from '../../assets/images/ShopApp.png'
import homePage1 from '../../assets/images/shopImages/shopHome1.png'
import homePage2 from '../../assets/images/shopImages/shopHome2.png'
import details from '../../assets/images/shopImages/shopItem.png'
import categoryPage from '../../assets/images/shopImages/shopCategory.png'
import cartPage from '../../assets/images/shopImages/shopCart.png'
import darkModePage from '../../assets/images/shopImages/shopDark.png'

const ShopApp = () => {

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
                        strArray={['S', 'h', 'o', 'p', 'p', 'i', 'n', 'g', ' ', 'A', 'p', 'p']}
                        idx={15}
                    />
                </h1>
            </div>
            <div className="details-display">

                <img className="splash-img" src={shopImage}/>

                <a target="_blank" rel="noreferrer" href="https://github.com/fayaz-09/ShoppingApp">
                    <FontAwesomeIcon icon={faGithub} color="#b30fff"/>
                </a>

                <p>
                    Personal project created to learn and develop my understanding of .NET MAUI. This app runs on windows and android devices, to simulate how a shopping
                    application looks to the user, aswell as how it works on the backend. To achieve this it uses a MVVM (Model-View-ViewModel) framework available with .NET MAUI.
                    The items for this app are beinng pulled from an online file where the data is then filtered to pull the items entirely or get a specific category of item. 
                </p>

                <h1>Home Page</h1>

                <p>
                    Home page where users can see currently on sale and popular featured items. The bottom navigation buttons allow the user to return to the home page from
                    any other page or view the cart page. Tapping on each individual item will take the user to a seperate details page where they can then choose to add the
                    item to their cart. Selecting a category will present the user with all the avilable items belonging to that group, for easy access to the exact item 
                    they're looking for.
                </p>

                <div className="details-container">
                    <img src={homePage1}/>
                    <img src={homePage2}/>
                </div>
                
                <h1>Item Details Page</h1>
                
                <div className="details-container">
                    <img src={details}/>
                    <p>
                        When a user selects an item they are navigated to the relevant details page. Here the user can see the product description and price in 
                        more detail. Before adding an item to the cart however, the quantity of the item can be selected which will then add the corresponding amount 
                        once the add to cart button is clicked.
                    </p>
                </div>

                <h1>Category Page</h1>
                
                <div className="details-container">
                    <p>
                        This page will show different items depending on which category has been selected. This allows for an easy way to find the item the user is
                        searching for.
                    </p>
                    <img src={categoryPage}/>
                </div>

                <h1>Cart Page</h1>

                <div className="details-container">
                    <img src={cartPage}/>
                    <p>
                        The cart page has access to a list of items which is always being updated when the user adds and removes an item from the cart. This list allows 
                        the system to identify from all available which specific items the user has added, and then displays them when the page is loaded. The total cart price
                        dynamically updates as items are added and removed, aswell as the quantity of each item. 
                    </p>
                </div>

                <h1>Dark Mode</h1>
                
                <div className="details-container">
                    <img src={darkModePage}/>
                    <p>
                        A simple dark mode has been added which will change the styling of the user interface to match the devices dark mode setting.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default ShopApp;