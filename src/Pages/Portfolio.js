import React from 'react'
import Title from "../Title";
import "../Portfolio.css";
import portfolios from "../PortfolioComponent";
import Categories from "../Portfolio_category";
import MenuItems from "../Portfolio_menu";
import {useState} from 'react';

const allCategories = ['All', ...new Set(portfolios.map(item=>item.category))];

function Portfolio(){
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category)=>{
        const filteredData = Portfolio.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData)
    }
    return(
        <div className="Portfolio">
           <div className="Title">
               <Title title={'Portfolios'} span={'Portfolios'} />
           </div>
            <div className="portfolios">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItem={menuItems} />

            </div>

        </div>
    );
}

export default Portfolio;