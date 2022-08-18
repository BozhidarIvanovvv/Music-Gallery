import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let totalPrice = 0;
    cart.map((album) => (totalPrice += Number(album.price)));
    setPrice(totalPrice.toFixed(2));
  };

  useEffect(() => {
    handlePrice();
  });

  const handleRemove = (id) => {
    const filteredCart = cart.filter((item) => item._id !== id);

    setCart(filteredCart);
    handlePrice();
  };

  return (
    <article className={styles["cart-article"]}>
      {cart.length !== 0 ? (
        <>
          {cart.map((album) => (
            <div className={styles["cart_box"]} key={album._id}>
              <div className={styles["cart_img"]}>
                <img src={album.imageUrl} alt="" />
                <p>
                  {album.title} - <span>{album.artist}</span>
                </p>
              </div>
              <div>
                <span>{album.price}$</span>
                <button onClick={() => handleRemove(album._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className={styles.total}>
            <span>Total Price of your Cart</span>
            <span>{price}$</span>
          </div>
        </>
      ) : (
        <h1 className={styles["empty-cart"]}>Your shopping cart is empty!</h1>
      )}
    </article>
  );
};

export default Cart;
