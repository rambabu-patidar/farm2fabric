import { useState } from "react";
import ShopProduct from "./ShopProduct";
import Filter from "./Filter";
import Paginate from "./Paginate";

function ShopContent() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 2,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool2.jpg",
    },
    {
      id: 3,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 4,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 5,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool2.jpg",
    },
    {
      id: 6,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 7,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 8,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool2.jpg",
    },
    {
      id: 9,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool2.jpg",
    },
    {
      id: 10,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 11,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 12,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 13,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 14,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool1.jpg",
    },
    {
      id: 15,
      title: "Raw Sheep Wool",
      price: 250,
      img: "/images/wool2.jpg",
    },
  ]); // set data of products from backend
  const [showPage, setShowPag] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start, end });
  };

  return (
    <div className="md:mr-20 md:ml-20 mt-6 md:mt-9 flex flex-col lg:flex-row justify-between">
      <Filter />
      <div>
        <div className=" flex flex-wrap justify-center items-center md:grid justify-items-center md:grid-cols-3 gap-4 md:gap-6">
          {products
            .slice(pagination.start, pagination.end)
            .map((product, index) => (
              <ShopProduct key={index} product={product} />
            ))}
        </div>
        <Paginate
          showPage={showPage}
          onPaginationChange={onPaginationChange}
          total={products.length}
        />
      </div>
    </div>
  );
}

export default ShopContent;
