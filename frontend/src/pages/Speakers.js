import React, { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";

function Speakers() {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 700);
    fetch("http://localhost:3600/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].title);

        for (const key in data) {
          data[key].id = key;
          if (data[key].category[0] === "speakers") {
            setProducts((prev) => {
              return [...prev, data[key]];
            });
          }
        }

        // setProducts(data);
      });
  }, []);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "2rem 0 -2rem 0",
          color: "white",
        }}>
        SPEAKERS
      </h1>
      <ProductsList products={products} key={products.id} />
    </div>
  );
}

export default Speakers;
