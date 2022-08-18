import React from "react";

const CartItem = ({ album, handleClick }) => {
  const { title, artist, price, imageUrl } = album;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={imageUrl} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{artist}</p>
        <p>Price - {price}$</p>
        <button onClick={() => handleClick(album)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default CartItem;
