import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [values] = useSearch();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap ">
            {values?.results.map((p) => (
              <div
                key={p._id}
                className="card m-2"
                style={{ width: "16rem", height: "28rem" }}
              >
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top p-2"
                  alt={p.name}
                  height="210px"
                  width="100px"
                />
                <div className="card-body">
                  <h5 className="card-title ">{p.name}</h5>
                  <p className="card-text ">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p
                    className="card-text "
                    style={{
                      position: "absolute",
                      bottom: "100px",
                      marginLeft: "90px",
                    }}
                  >
                    $ {p.price}
                  </p>
                  <button
                    className="btn btn-info "
                    style={{
                      width: "13rem",
                      position: "absolute",
                      bottom: "10px",
                      marginLeft: "-102px",
                    }}
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-warning "
                    style={{
                      width: "13rem",
                      position: "absolute",
                      bottom: "60px",
                      marginLeft: "-102px",
                    }}
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item added cart");
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
