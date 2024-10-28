import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Hiển thị thông báo loading trong khi fetch data
  }

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="d-flex justify-content-center">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            <strong>Price:</strong> {product.price}
          </p>
          <p className="card-text">
            <strong>Quantity:</strong> {product.quantity}
          </p>
          <p className="card-text">
            <strong>Description:</strong> {product.description}
          </p>
          <button onClick={() => navigate("/")} className="btn btn-secondary">
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
