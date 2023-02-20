import { React, useState } from "react";
import "./under.css";
import InputMask from "react-input-mask";
import { data } from '../home/data';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// imported imges
import { GrClose } from "react-icons/gr"
import { AiOutlineRightCircle } from "react-icons/ai"


function Under({ active, setActive, item, incr, decr, count1 }) {

  const removeItem = () => {
    setActive(false)
  }
  return (
    <div style={{ display: active ? "block" : "none" }} className="under-container">
      <div className="under-section">
        <div className="under-item">
          <div className="img-box">
            <div className="head-imgs flex">
              <Carousel>
                <div>
                  <img className="head-img none" src={item.img} alt="" />
                </div>
                <div>
                  <img className="head-img none" src={item.img} alt="" />
                </div>
                <div>
                  <img className="head-img none" src={item.img} alt="" />
                </div>
                <div>
                  <img className="head-img none" src={item.img} alt="" />
                </div>
                <div>
                  <img className="head-img none" src={item.img} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="text-box">
            <h2>Sweet Corn</h2>
            <small>1lb</small>
            <p className="title">
              {item.title}
            </p>
            <strong>See more</strong>
            <div className="price flex">
              <h2>${item.price1} {item.price2} </h2>
              <del>${item.del}</del>
            </div>
            <strong>50 dona mavjud</strong>
            <div className="count grid">
              <button onClick={() => decr()}>-</button>
              <p>{count1}</p>
              <button onClick={() => incr()}>+</button>
            </div>
            <div className="text-bottom flex">
            <InputMask 
                className="nomer"
                mask="+999 (99) 999 99 99"
                pattern="^\d{4} \d{4} \d{4} \d{4}$"
                placeholder="+999 (99) 999 99 99"
              />     
              <button className="buy">Sotib olish</button>
            </div>
          </div>
          <GrClose onClick={removeItem} className="close" />
        </div>
      </div>
    </div>
  );
}
export default Under;
