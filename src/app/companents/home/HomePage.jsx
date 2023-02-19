import React, { useState } from "react";
import "./home.css";

// importend companents
import { data } from "./data";
import Under from "../under/Under";
// importend imges


function HomePage() {
  const [avtive, setActive] = useState(false)
  const [item, setItem] = useState(data)
  const [count1, setCount] = useState()


  const handClick = (item) => {
    setCount(item.count)
    setItem(item)
  }
  const incr = () => {
    setCount(count1 + 1)
  }
  const decr = () => {
    if (count1 >= 1) {
      setCount(count1 - 1)
    }
  }
  return (
    <>
      <div className="home-container padding">
        <div className="one-row grid">
          {data.map((item, index) => (
            <div onClick={() => setActive((prev) => !prev)} className="one-box" key={index}>
              <div onClick={() => handClick(item)} className="img-box">
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
                  <button onClick={() => incr()} className="add-btn">Купить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-btn">
          <button>Load More</button>
        </div>
      </div>
      <Under active={avtive} setActive={setActive} item={item} count1={count1} decr={decr} incr={incr} />
    </>
  );
}
export default HomePage;
