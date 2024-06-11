import React from "react";
import iphone from "./iphone.webp";
import cart from "./cart.png";
import { Addtocart } from "../services/actions/action";
import { connect } from "react-redux";
// import { Addtocart } from "../services/action";

// import { useSelector, useDispatch } from 'react-redux';

function Home({ addToCartHandler, data }) {
  return (
    <>
      <div className="cart">
        <img src={cart} alt="cart"></img>
      </div>
      <span className="showdata">{data?.length}</span>
      <div className="cart-wrap">
        <div className="img-warp">
          <img src={iphone} alt="phone"></img>
        </div>
        <div className="detail">
          <span>i phone</span>
          <span>price : $1000.00</span>
        </div>
        <div className="btn-wrap">
          <button
            onClick={() => {
              addToCartHandler({ price: 1000, name: "i phone" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

const mapstatetoprops = (state) => ({
  data: state.Carditem,
});
const mapDispatchtopros = (dispatch) => ({
  addToCartHandler: (data) => dispatch(Addtocart(data)),
});

export default connect(mapstatetoprops, mapDispatchtopros)(Home);
