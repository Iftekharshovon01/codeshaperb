import React, { useState } from "react";
import Counter from "../Countdown/Counter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

const FeatureProductdetails = () => {
  const featureProducts = [
    {
      id: "01",
      discriptionPromo: "DEAL OF THE WEEK",
      title: "Hot Deal",
      category: "Men",
      discription: "Winter Support Shirt",
      sale: "$30",
      price: "$50",
      colors: ["#CBCAD2", "#0F1429", "#FFCC00", "#CBCAD3"],
      size: ["XXL", "XL", "L", "M"],
      num: "1",
    },
  ];

  const [cart, setCart] = useState(
    localStorage.getItem("cart") == null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );

  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [disable, setDisable] = useState(false);

  const handleCart = (id, category, sale, event) => {
    event.preventDefault();

    if (size && color && quantity) {
      let existingProductIndex = cart.findIndex(
        (product) =>
          product.id === id && product.color === color && product.size === size
      );
      console.log(existingProductIndex);

      if (existingProductIndex > -1) {
        const tempCart = cart;
        tempCart[existingProductIndex].quantity = quantity;

        setCart(tempCart);
        localStorage.setItem("cart", JSON.stringify(tempCart));
      } else {
        const tempcart = [...cart, { category, id, sale, color, size, quantity }];
        setCart(tempcart);
        localStorage.setItem("cart", JSON.stringify(tempcart));
        alert(" submit");
      }
    } else {
      alert("select every varient");
    }
  };

  const decrementQuantity = () => {
    if (quantity <= 1) {
      setDisable(true);
      alert("minium quantity 1");
    } else {
      setDisable(false);
      setQuantity(parseInt(quantity) - 1);
    }
  };
  const incrementQuantity = () => {
    setDisable(false);
    setQuantity(parseInt(quantity) + 1);
  };

  return (
    <div className="featureProduct">
      {featureProducts.map((product) => (
        <div className="details-featureProduct" key={product.id}>
          <div className="discription-title-text">
            <h6>{product.discriptionPromo}</h6>
            <h3>{product.title}</h3>
          </div>
          <div className="category-discription">
            <p>{product.category}</p>
            <h5>{product.discription}</h5>
            <h4>
              {product.sale}
              <del>{product.price}</del>{" "}
            </h4>
          </div>
          <div className="counter-wrapper">
            <h1>Expire in:</h1>
            <div className="counter-section">
              <Counter></Counter>
            </div>
            <div className="color-size-selector">
              <div className="color-selector">
                <p>Available Color:</p>
                <div className="d-flex">
                  {product.colors.map((variantColor) => (
                    <div className="PColor" key={variantColor}>
                      <input
                        name="Pcolor"
                        type="radio"
                        id={variantColor}
                        value={variantColor}
                        onChange={() => setColor(variantColor)}
                      />
                      <label
                        htmlFor={variantColor}
                        style={{ background: variantColor }}
                        className={variantColor === color ? "selected" : ""}
                      ></label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="size-selector">
                <p>Available Size:</p>
                <div className="d-flex">
                  {product.size.map((variantSize) => (
                    <div className="sizes" key={variantSize}>
                      <input
                        name="size"
                        id={variantSize}
                        type="radio"
                        value={variantSize}
                        onChange={() => setSize(variantSize)}
                      />
                      <label
                        htmlFor={variantSize}
                        className={variantSize === size ? "selected" : ""}
                      >
                        {variantSize}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="add-to-cart-wrapper">
            <div className="quantity-wrapper">
              <button onClick={incrementQuantity}>+</button>
              <label
                type="number"
                onChange={(event) => setQuantity(parseInt(event.target.value))}
                value={quantity}
                min={1}
              >
                {quantity}
              </label>
              <button disabled={disable} onClick={decrementQuantity}>
                -
              </button>
            </div>
            <Link
              className="button-white"
              onClick={(event) =>
                handleCart(product.id, product.category, event)
              }
            >
              Add to cart <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <Link className="button-white">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link className="button-white">
              <FontAwesomeIcon icon={faRetweet} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureProductdetails;
