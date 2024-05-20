
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ShopApp from './components/ShopApp';
import SoulControl from './components/ShopApp/soulControl';
import CombatAlley from './components/ShopApp/combatAlley';
import PizzaPhil from './components/ShopApp/pizzaPhil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="shoppingApp" element={<ShopApp/>}/>
        <Route path="soulControl" element={<SoulControl/>}/>
        <Route path="combatAlley" element={<CombatAlley/>}/>
        <Route path="pizzaPhil" element={<PizzaPhil/>}/>
      </Route>
    </Routes>
  );
}

export default App;
