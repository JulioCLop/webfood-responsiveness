import React from "react";

// Component Import
import Header from "../header/Header.component";
import ArticleCard from "../Article-Card/Article-Card.component";

// Assets
import Cheeseburger from "../../assets/cheeseburgers.jpg";
import Risotto from "../../assets/risotto.jpg";
// Styles Import
import "./Homepage.styles.css";

const Homepage = () => {
   return (
      <div className="homepage">
         <Header />
         <main>
            <h1>Browse Our Delicious Meals</h1>
            <section id="latest-products">
               <ul>
                  <li className="food-item">
                     <ArticleCard
                        img={Risotto}
                        alt="risotto"
                        dishName="Risotto with Tiger Prawns"
                     />
                  </li>
                  <li className="food-item">
                     <ArticleCard
                        img={Cheeseburger}
                        alt="cheeseburger"
                        dishName="Cheeseburgers"
                     />
                  </li>
               </ul>
            </section>
         </main>

         
      </div>
   );
};
export default Homepage;
