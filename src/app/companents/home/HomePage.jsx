import React, { useState } from "react";
import "./home.css";

// importend companents
import { data } from "./data";
import Under from "../under/Under";
// importend imges

function HomePage() {

  const [avtive, setActive] = useState(false)

  return (
    <>
      <div className="home-container padding">
        <div className="one-row grid">
          {data.map((item, index) => (
            <div onClick={() => setActive ((prev) => !prev)} className="one-box" key={index}>
              <div className="img-box">
                <img title={item.title} src={item.img} alt="" />
              </div>
              <div className="one-text">
                <div className="price flex">
                  <h3>
                    {item.price1} {item.price2}
                  </h3>
                  <p>сум / 1 кг</p>
                </div>
                <p>{item.title} </p>
                <div className="btn-box">
                  <button className="add-btn">Купить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-btn">
          <button>Load More</button>
        </div>
      </div>
      <Under active={avtive} setActive={setActive} />
    </>
  );
}
export default HomePage;
