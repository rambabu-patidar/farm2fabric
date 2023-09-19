import { useState } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function ShopProduct({ product}) {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);

  const handleClick = (e) => {
    navigate(`/buyers-dashboard/wool-details/${product.id}`);
  };

  const handleFavClick = (event) => {
    event.stopPropagation();
    setFav(!fav);
  };

  const handleCartClick = (event) => {
    event.stopPropagation();
    setCart(!cart);
  };

  return (
    <div className="md:ml-0 mb-10 flex flex-col justify-center ">
      <div className="relative" id="outer" onClick={handleClick}>
        <img className="w-[302px] h-[304px] rounded-[10px]" src={product.img} />
        <div
          style={{ transition: "opacity 0.4s ease-in-out " }}
          className="rounded-[10px] overlay hover:opacity-80 absolute top-0 left-0 right-0 bottom-0 opacity-0 bg-black cursor-pointer flex justify-center"
        >
          <div
            className="content absolute top-[50%] left-[50%] text-white"
            style={{
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <button
              onClick={handleFavClick}
              className="p-3 bg-[#242424] text-white rounded-full mr-6"
            >
              <FaHeart size={20} color={fav ? "red" : ""} />
            </button>
            <button
              onClick={handleCartClick}
              className="p-3 bg-[#242424] text-white rounded-full"
            >
              <FaCartPlus size={20} color={cart ? "yellow" : ""} />
            </button>
          </div>
        </div>
      </div>
      <Link to={`/buyersdashboard/wool-details/${product.id}`}>
        <h6 className="mt-4 hover:text-green-400 cursor-pointer text-lg tracking-[.035em] font-inter font-semibold text-[#252525]">
          {product.title}
        </h6>
      </Link>

      <p className="text-sm font-inter font-normal text-[#252525]">Variant</p>
      <p className="mt-2 text-xl font-inter tracking-[.035em] font-bold text-[#252525]">
        {product.price}
      </p>
    </div>
  );
}

export default ShopProduct;
