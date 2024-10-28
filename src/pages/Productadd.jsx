import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    quantity: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.price ||
      !product.description ||
      !product.image ||
      !product.quantity
    ) {
      alert("Vui lòng không để trống");
      return;
    }

    if (window.confirm("Bạn có muốn thêm không?")) {
      axios
        .post("http://localhost:3000/products", product) // Gửi trực tiếp đối tượng sản phẩm
        .then(() => {
          alert("Thêm thành công");
          navigate("/admin"); // Điều hướng về trang danh sách sản phẩm
        })
        .catch((error) => {
          console.error("Có lỗi xảy ra khi thêm sản phẩm:", error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Name
          </span>
          <input
            name="name"
            value={product.name}
            onChange={onChange}
            type="text"
            className="form-control"
            aria-label="Product Name"
          />
        </div>
        <br />
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Price
          </span>
          <input
            name="price"
            value={product.price}
            onChange={onChange}
            type="number"
            className="form-control"
            aria-label="Product Price"
          />
        </div>
        <br />
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Quantity
          </span>
          <input
            name="quantity"
            value={product.quantity}
            onChange={onChange}
            type="number"
            className="form-control"
            aria-label="Product Quantity"
          />
        </div>
        <br />
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Description
          </span>
          <input
            name="description"
            value={product.description}
            onChange={onChange}
            type="text"
            className="form-control"
            aria-label="Product Description"
          />
        </div>
        <br />
        <div className="input-group flex-nowrap">
          <span className="input-group-text">Image URL</span>
          <input
            name="image"
            value={product.image}
            onChange={onChange}
            type="text"
            className="form-control"
            placeholder="Nhập URL hình ảnh"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-warning">
          ADD
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
