/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import FilterItem from "./FilterItem";

function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const filterStyles = `fixed inset-y-0 left-0 z-40 w-full max-w-xs bg-white transition duration-300 transform ${
    isFilterOpen ? "translate-x-0" : "-translate-x-full"
  } max-h-screen overflow-y-auto`;

  return (
    <div className="mb-10">
      <div className="flex justify-center lg:hidden">
        <button className="mt-4" onClick={toggleFilter}>
          {isFilterOpen ? (
            <></>
          ) : (
            <div className="border-2 border-gray-500 border-solid bg-green-400 px-2 flex flex-row ">
              <p className="font-inter font-semibold text-lg">Filters</p>
              <FiFilter size={20} className="ml-3 mt-[4px]" />
            </div>
          )}
        </button>
      </div>

      <div className="max-md:hidden flex flex-col rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.08)] w-[302px] h-[934px]">
        <h1 className="lg:mt-6 mt-16 ml-3.5 font-inter font-semibold text-base">
          Filters
        </h1>
        <FilterItem
          filterTitle="Wool Category"
          filterItems={[
            "Wool Waste",
            "Merino Wool ",
            "Mineral Wool",
            "Terry Wool",
            "Ceramic Wool",
          ]}
        />

        <FilterItem
          filterTitle="Sheep Categories"
          filterItems={[
            "Merino",
            "Debouillet",
            "Rambouillet",
            "Cormo",
            "Comeback",
            "Bond",
            "Polwarth",
            "Targhee",
            "Tesswater",
            "Finnish Landrace",
            "Wensleydale",
          ]}
        />
        <FilterItem
          filterTitle="Price"
          filterItems={[
            "Below ₹500",
            "₹500 - ₹1000",
            "₹1000 - ₹2000",
            "₹2000 - ₹3000",
            "₹3000 and Above",
          ]}
        />
      </div>
      <div
        className={`lg:hidden ${filterStyles} rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.08)] w-[302px] h-[934px]`}
      >
        <div className="flex justify-between">
          <h1 className="md:mt-4 mt-7 ml-3.5 font-inter font-semibold text-base">
            Filters
          </h1>
          <button className="mt-6 mr-4" onClick={toggleFilter}>
            <svg
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <FilterItem
          filterTitle="Category"
          filterItems={[
            "Category 1",
            "Category 2 ",
            "Category 3",
            "Category 4",
            "Category 5",
          ]}
        />

        <FilterItem
          filterTitle="Sub Categories"
          filterItems={["Shirt", "T-Shirt", "Sweatshirt", "Cap"]}
        />

        <FilterItem filterTitle="Variants" filterItems={["Black", "Blue"]} />

        <FilterItem
          filterTitle="Price"
          filterItems={[
            "Below ₹500",
            "₹500 - ₹1000",
            "₹1000 - ₹2000",
            "₹2000 - ₹3000",
            "₹3000 and Above",
          ]}
        />
      </div>
    </div>
  );
}

export default Filter;
