import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data));
  }, []);
  const removeItem = (id) => {
    const confirm = window.confirm("Ban co muon xoa khong");
    if (confirm) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => setProducts(products.filter((item) => item.id !== id)));
    }
  };
  return (
    <div className="container">
      <h1>ADMIN</h1>
      <Link to={"/add"}>
        <button type="button" class="btn btn-success">
          ADD
        </button>
      </Link>
      <br />
      <br />
      <table class="table table-success table-striped-columns">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>IMAGE</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>${item.price}</td>
              <td>
                <button
                  onClick={() => removeItem(item.id)}
                  type="button"
                  class="btn btn-primary"
                >
                  DELETE
                </button>
                <Link to={`/edit/${item.id}`}>
                  <button type="button" class="btn btn-secondary">
                    UPDATE
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
