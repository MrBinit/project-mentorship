import React, { useState } from "react";
import Kings_logo from './Images/kings_logo.png'
import MomoImage from './Images/momo.png'
import VegMomoImage from './Images/veg_momo.png'
import CheeseToastImage from './Images/Cheese_Toast.png'
import ChanaaImage from './Images/Channa.png'
import AlooChopImage from './Images/AlooChopImage.png'
import PakaudaImage from './Images/pakaudaa.png'
import ChickenFriedRiceImage from './Images/Chicken-Fried-Rice.png'
import VegFriedRiceImage from './Images/vegfriedrice.png'
import ChickenSandwichImage from './Images/shredded-chicken-sandwich-removebg-preview.png'
import VegSandwichImage from './Images/Vegetable-Sandwich.png'
import VegChowminImage from './Images/vegetable-chowmin.png'
import ChickenChowminImage from './Images/chicken-chowmin.png'
import BoilEggImage from './Images/BoilEgg.png'
import OmletteImage from './Images/omlette.png'
import MixFruitsImage from './Images/Mix-Fruits.png'
import CoffeeImage from './Images/coffee.png'
import MilkTeaImage from './Images/MilkTea.png'
import BlackTeaImage from './Images/BlackTea.png'
import GreenTeaImage from './Images/GreenTea.png'
import HotLemonImage from './Images/Hot_Lemon.png'
import JuiceImage from './Images/Juice.png'
import { Link } from 'react-router-dom';


function Home_Page() {
  const [show, setShow] = useState(true)

  const [count, setCount] = useState(1)

  const [Menu] = useState([
    {
      title: 'Chicken Momo',
      Image: MomoImage,
      type: 'non-veg',
    },
    {
      title: 'Veg Momo',
      Image: VegMomoImage,
      type: 'veg',

    },
    {

      title: 'Cheese toast',
      Image: CheeseToastImage,
      type: 'veg',


    },
    {
      title: 'Chanaa',
      Image: ChanaaImage,
      type: 'veg',


    },
    {
      title: 'Aloo Chop',
      Image: AlooChopImage,
      type: 'veg',


    },
    {
      title: 'Veg Pakauda',
      Image: PakaudaImage,
      type: 'veg',

    },
    {
      title: 'Chicken Fried Rice',
      Image: ChickenFriedRiceImage,
      type: 'non-veg',



    },
    {
      title: 'Veg Fried Rice',
      Image: VegFriedRiceImage,
      type: 'veg',


    },
    {
      title: 'Chicken Sandwich',
      Image: ChickenSandwichImage,
      type: 'non-veg',

    },
    {
      title: 'Veg Sandwich',
      Image: VegSandwichImage,
      type: 'veg',

    },

    {
      title: 'Veg Chowmin',
      Image: VegChowminImage,
      type: 'veg',

    },
    {
      title: 'Chicken Chowmin',
      Image: ChickenChowminImage,
      type: 'non-veg',


    },
    {
      title: 'Boil Egg',
      Image: BoilEggImage,
      type: 'non-veg',


    },
    {
      title: 'Omlette',
      Image: OmletteImage,
      type: 'non-veg',


    },
    {
      title: 'Mix Fruits',
      Image: MixFruitsImage,
      type: 'veg',


    },
    {
      title: 'Coffee',
      Image: CoffeeImage,
      type: 'drinks',


    },
    {
      title: 'Milk Tea',
      Image: MilkTeaImage,
      type: 'drinks',


    },
    {
      title: 'Black Tea',
      Image: BlackTeaImage,
      type: 'drinks',


    },
    {
      title: 'Green Tea',
      Image: GreenTeaImage,
      type: 'drinks',

    },
    {
      title: 'Hot Lemon',
      Image: HotLemonImage,
      type: 'drinks',

    },
    {
      title: 'Juice',
      Image: JuiceImage,
      type: 'drinks',

    },
  ])
  const Increment = () => {
    setCount(count + 1)
  }

  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const showNonVeg =() =>
  {
    setShow(false)
   
  }

  const showVeg =() =>
  {
    setShow(false)
   
  }


  const showJuice =() =>
  {
    setShow(false)
   
  }


  

  return (
    <>

      <div className="Home_page">

        <div className="Canteen">
          <div className="Kings_Canteen">
            <h1> King's</h1>
            <h1>Canteen</h1>
          </div>
          <div className="Grab_a_bite">
            <h1> <i>grab a</i></h1>
            <h1> <i>bite!</i></h1>
          </div>


        </div>
        <div className="Container">
          <div className="Nav_bar">
            <img src={Kings_logo} />
            <a className="All" onClick={()=>setShow(true)}>All</a>
            <a className="Non-veg" onClick={showNonVeg}>Non-Veg</a>
            <a className="Veg" onClick={showVeg}>Veg</a>
            <a className="Drinks" onClick={showJuice}>Drinks</a>
          </div>

{
  show &&
          <div className="Menu">
            {Menu.map((All_Menu, i) => (
              
              <div key={i} className="All_Menu">
             
                <img src={All_Menu.Image} height={150} width={150} />

                <h1>{All_Menu.title}</h1>

                <div className="items">
                  <div className="quant">

                    <div className="btn" onClick={Decrement}>-</div>
                    <div>{count}</div>


                    <div className="btn" onClick={Increment}>+</div>
                  </div>
                  <div className="price">Rs</div>
                </div>
                
                <button className="Add_to_Cart"> 
                <ul>
                    <li>
                      <Link to="./cart"> Add to Cart</Link>
                    </li>
                  </ul>
                  </button>

                 
                  
              </div>
            ))}
          </div>

}

        </div>







      </div>
    </>
  )
}

export default Home_Page;
