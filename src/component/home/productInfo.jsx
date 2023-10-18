import { BsSearch } from "react-icons/bs";
const ProductInfo = () => {
  return (
    <div className="table-container">
      <div className="table-headBar">
        <h3>Product Sell</h3>
        <BsSearch className="search-icon-small" />
        <div className="RightSection">
          <BsSearch className="search-icon-small" />
          <BsSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <select name="" id="bar-select">
          <option value="">Last 30 days</option>
        </select>
      </div>
      <table className="product-table">
        <thead className="table-header">
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <br />
        <tbody className="products">
          <tr>
            <td className="product-name">
              <img
                src="https://source.unsplash.com/800x800/?=random"
                alt="avatar"
              />
              <div className="products-info">
                <h3>Abstract 3D</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </td>
            <td>30 in stock</td>
            <td>$ 300</td>
            <td>30</td>
          </tr>
        </tbody>
        <tbody className="products">
          <tr>
            <td className="product-name">
              <img
                src="https://source.unsplash.com/800x800/?=random"
                alt="avatar"
              />
              <div className="products-info">
                <h3>Sarphens Illustration</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </td>
            <td>30 in stock</td>
            <td>$ 300</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ProductInfo;
