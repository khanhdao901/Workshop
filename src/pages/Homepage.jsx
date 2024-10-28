import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container">
      <img
        style={{ width: "100%", borderRadius: "20px" }}
        src="public/Rectangle 1.jpg"
        alt=""
      />
      <br />
      <br />
      <div className="row">
        {products.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <Link to={`/detail/${item.id}`}>
                  <button type="button" className="btn btn-primary">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
