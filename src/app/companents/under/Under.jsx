import React from "react";
import "./under.css";
import InputMask from "react-input-mask";



// imported imges
import img from "./img16.png";

function Under({active,setActive}) {
const removeItem= ()=> {
  setActive(false)
}
  return (
    <div style={{ display :active ? "block" : "none"}} className="under-container">
      <div className="under-section">
        <div className="under-item">
          <div className="img-box">
            <img className="head-img" src={img} alt="" />
            <div className="imgs-box flex">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
            </div>
          </div>
          <div className="text-box">
            <h2>Sweet Corn</h2>
            <small>1lb</small>
            <p>
              Maize, also known as corn, is a cereal grain first domesticated by
              indigenous peoples in southern Mexico about 10,000 years ago. The
              leafy stalk of th...
            </p>
            <strong>See more</strong>
            <div className="price flex">
              <h2>$4.00</h2>
              <del>$5.00</del>
            </div>
            <strong>50 dona mavjud</strong>
            <div className="count grid">
              <button>-</button>
              <p>5</p>
              <button>+</button>
            </div>
            <div className="text-bottom flex">
              <InputMask
                className="nomer"
                mask="+999 (99) 999 99 99"
                pattern="^\d{4} \d{4} \d{4} \d{4}$"
                required
              />
              <button>Sotib olish</button>
            </div>
          </div>
            <h1 onClick={removeItem} className="close">X</h1>
        </div>
      </div>
    </div>
  );
}

export default Under;
