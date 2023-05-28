import React, { useState } from "react";
import Counter from "../Countdown/Counter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
        const tempcart = [
          ...cart,
          { category, id, sale, color, size, quantity },
        ];
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
    <div className="featureProduct py-3">
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
            <h1>Expires in:</h1>
            <div className="counter-section">
              <Counter></Counter>
            </div>
            <div className="color-size-selector">
              <div className="color-selector">
                <p>Available Color:</p>
                <div className="d-flex justify-content-center">
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
                <div className="d-flex justify-content-center">
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
              className="button-black"
              onClick={(event) =>
                handleCart(product.id, product.category, event)
              }
            >
              Add to cart <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <Link className="button-white">
              <svg
                className="head-heart-icon"
                width="24"
                height="20"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.47706 3.477C2.85025 4.10379 2.35305 4.84791 2.01382 5.66687C1.6746 6.48582 1.5 7.36357 1.5 8.25C1.5 9.13643 1.6746 10.0142 2.01382 10.8331C2.35305 11.6521 2.85025 12.3962 3.47706 13.023L15.0001 24.546L26.5231 13.023C27.7889 11.7571 28.5001 10.0402 28.5001 8.25C28.5001 6.45978 27.7889 4.74288 26.5231 3.477C25.2572 2.21112 23.5403 1.49996 21.7501 1.49996C19.9598 1.49996 18.2429 2.21112 16.9771 3.477L15.0001 5.454L13.0231 3.477C12.3963 2.85019 11.6521 2.35298 10.8332 2.01376C10.0142 1.67454 9.13649 1.49994 8.25006 1.49994C7.36363 1.49994 6.48588 1.67454 5.66693 2.01376C4.84797 2.35298 4.10385 2.85019 3.47706 3.477V3.477Z"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link className="button-white">
              <svg
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 10.9999C5 9.35725 5.06133 7.72925 5.184 6.11725C5.27834 4.84012 5.82839 3.63938 6.73393 2.73385C7.63946 1.82831 8.8402 1.27826 10.1173 1.18392C13.3678 0.938693 16.6322 0.938693 19.8827 1.18392C21.1598 1.27826 22.3605 1.82831 23.2661 2.73385C24.1716 3.63938 24.7217 4.84012 24.816 6.11725C24.8387 6.41059 24.8587 6.70525 24.8773 6.99992M5 10.9999L1 6.99992M5 10.9999L9 6.99992M25 10.9999C25 12.6426 24.9387 14.2706 24.816 15.8826C24.7217 17.1597 24.1716 18.3605 23.2661 19.266C22.3605 20.1715 21.1598 20.7216 19.8827 20.8159C16.6322 21.0613 13.3678 21.0613 10.1173 20.8159C8.8402 20.7216 7.63946 20.1715 6.73393 19.266C5.82839 18.3605 5.27834 17.1597 5.184 15.8826C5.16133 15.5893 5.14133 15.2946 5.12267 14.9999M25 10.9999L21 14.9999M25 10.9999L29 14.9999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* <FontAwesomeIcon icon={faRetweet} /> */}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureProductdetails;
