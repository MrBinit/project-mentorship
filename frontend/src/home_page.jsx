import React, { useState, useEffect } from "react";
import KingsLogo from './Images/kings_logo.png';
import LogoutLogo from './Images/log-out.png';
import { Link } from 'react-router-dom';
import CartLogo from './Images/Cart_icon.png';
import './Home_Page.css';

function Home_Page() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [itemCounts, setItemCounts] = useState({});
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const [Menu] = useState([
    {
      title: 'Chicken Momo',
      Image: '/src/Images/momo.png',
      type: 'non-veg',
    },
    {
      title: 'Veg Momo',
      Image: '/src/Images/veg_momo.png',
      type: 'veg',
  
    },
    {
  
      title: 'Cheese toast',
      Image: '/src/Images/Cheese_Toast.png',
      type: 'veg',
  
  
    },
    {
      title: 'Chanaa',
      Image: '/src/Images/Channa.png',
      type: 'veg',
  
  
    },
    {
      title: 'Aloo Chop',
  
      Image: '/src/Images/AlooChopImage.png',
      type: 'veg',
  
  
    },
    {
      title: 'Veg Pakauda',
  
      Image: '/src/Images/pakaudaa.png',
      type: 'veg',
  
    },
    {
      title: 'Chicken Fried Rice',
  
      Image: '/src/Images/Chicken-Fried-Rice.png',
      type: 'non-veg',
  
  
  
    },
    {
      title: 'Veg Fried Rice',
      Image: '/src/Images/vegfriedrice.png',
      type: 'veg',
  
  
    },
    {
      title: 'Chicken Sandwich',
      Image: '/src/Images/shredded-chicken-sandwich-removebg-preview.png',
      type: 'non-veg',
  
    },
    {
      title: 'Veg Sandwich',
      Image: '/src/Images/Vegetable-Sandwich.png',
      type: 'veg',
  
    },
  
    {
      title: 'Veg Chowmin',
      Image: '/src/Images/vegetable-chowmin.png',
      type: 'veg',
  
    },
    {
      title: 'Chicken Chowmin',
      Image: '/src/Images/chicken-chowmin.png',
      type: 'non-veg',
  
  
    },
    {
      title: 'Boil Egg',
      Image: '/src/Images/BoilEgg.png',
      type: 'non-veg',
  
  
    },
    {
      title: 'Omlette',
      Image: '/src/Images/omlette.png',
      type: 'non-veg',
  
  
    },
    {
      title: 'Mix Fruits',
      Image: '/src/Images/Mix-Fruits.png',
      type: 'veg',
  
  
    },
    {
      title: 'Coffee',
      Image: '/src/Images/coffee.png',
      type: 'drinks',
  
  
    },
    {
      title: 'Milk Tea',
      Image: '/src/Images/MilkTea.png',
      type: 'drinks',
  
  
    },
    {
      title: 'Black Tea',
      Image: '/src/Images/BlackTea.png',
      type: 'drinks',
  
  
    },
    {
      title: 'Green Tea',
      Image: '/src/Images/GreenTea.png',
      type: 'drinks',
  
    },
    {
      title: 'Hot Lemon',
      Image: '/src/Images/Hot_Lemon.png',
      type: 'drinks',
  
    },
    {
      title: 'Juice',
      Image: '/src/Images/Juice.png',
      type: 'drinks',
  
    },
  ])

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory]);

  const incrementItem = (title) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [title]: (prevCounts[title] || 0) + 1,
    }));
  };

  const decrementItem = (title) => {
    setItemCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (newCounts[title] > 0) {
        newCounts[title] -= 1;
      }
      return newCounts;
    });
  };

  const filterMenuByCategory = (category) => {
    if (category === "All") {
      return Menu;
    } else {
      return Menu.filter((item) => item.type === category);
    }
  };

  const paginatedMenu = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filterMenuByCategory(currentCategory).slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filterMenuByCategory(currentCategory).length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Home_page">
      <div className="Container">
        <div className="Nav_bar">
        <a href="">
            <img src={KingsLogo} height={60} width={40} alt="Kings Logo" />
          </a>
          <div className="Nav_item" onClick={() => setCurrentCategory("All")}>All</div>
          <div className="Nav_item" onClick={() => setCurrentCategory("non-veg")}>Non-Veg</div>
          <div className="Nav_item" onClick={() => setCurrentCategory("veg")}>Veg</div>
          <div className="Nav_item" onClick={() => setCurrentCategory("drinks")}>Drinks</div>
          <img className="Cart_icon" src={CartLogo} height={55} alt="Cart" />
          <img className="Logout_icon" src={LogoutLogo} height={90} alt="Logout" />
        </div>

        <div className="Menu">
          {paginatedMenu().map((item, index) => (
            <div key={index} className="All_Menu">
              <img src={item.Image} alt={item.title} />
              <h1>{item.title}</h1>
              <div className="items">
                <div className="quant">
                <div className="quant">
                  <button className="btn decrement" onClick={() => decrementItem(item.title)}>-</button>
                  <span className="quantity">{itemCounts[item.title] || 0}</span>
                  <button className="btn increment" onClick={() => incrementItem(item.title)}>+</button>
                </div>

                </div>
                <div className="price">Rs</div>
              </div>
              <div className="Add_to_Cart">
                <button>
                  <Link to="/cart" className="cart-link">Add to Cart</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="StyledDivider"></div>
        <div className="Pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Home_Page;












