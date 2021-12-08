import React from "react";


// Styles Import 
import './Article-Card.styles.css';



const ArticleCard = ({img,alt,dishName,}) => {
   return (
      <article>
         <img src={img} alt={alt} />
         <div className="food-item-content">
               <h2>{dishName}</h2>
            <a href="" className="btn">
               Add to Cart
            </a>
         </div>
      </article>
   );
};

export default ArticleCard;
