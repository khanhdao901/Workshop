import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductAdd = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    quantity: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then(({ data }) => setProduct(data));
  }, [id]);

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

    if (window.confirm("Bạn có muốn cập nhật không không?")) {
      axios
        .put(`http://localhost:3000/products/${id}`, product)
        .then(() => {
          alert("Cập nhật thành công");
          navigate("/admin");
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
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
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
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
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
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
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
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            type="text"
            className="form-control"
            placeholder="Nhập URL hình ảnh"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-warning">
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
