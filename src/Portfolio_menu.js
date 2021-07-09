import React from 'react';

function Portfolio_menu({menuItem}){
    return(
        <div className="portfolio-container">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio-menu" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                            </ul>
                        </div>
                        <h5>
                            <a href={item.link2}>{item.title}</a>
                        </h5>
                        <p></p>
                    </div>
                })
            }
        </div>
    );
}

export default Portfolio_menu;