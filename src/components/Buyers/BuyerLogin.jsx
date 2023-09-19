import React, { useState } from "react";
import Address from "./Address";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  mobile: "",
  address: "",
  district: "",
  state: {
    code: "",
    name: "",
  },
  gst_no: "",
};

function BuyerLogin() {
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    axios
      .post(
        "https://kn3rsgdc-5000.inc1.devtunnels.ms/farmerSignup",
        formState,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
        }
      )
      .then((res) => {
        console.log(res?.data);
        toast.success("Your details have been updated successfully!");
        navigate("/buyers-dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center flex-col w-10/12 items-center border-2 m-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="text-[#252525] text-base font-medium tracking-[0.035em]">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="block w-full h-[48px] py-3 px-1 outline-none bg-[#FFFFFF] gap-2 rounded-[10px] mt-1 mb-1 border border-[#252525]"
          />
        </div>
        <div className="mb-2">
          <label className="text-[#252525] text-base font-medium tracking-[0.035em]">
            Contact No.
          </label>
          <input
            type="text"
            name="mobile"
            value={formState.mobile}
            onChange={handleChange}
            className="block w-full h-[48px] py-3 px-1 outline-none bg-[#FFFFFF] gap-2 rounded-[10px] mt-1 mb-1 border border-[#252525]"
          />
        </div>
        <Address formState={formState} handleChange={handleChange} />
        <button className="text-[#ffffff] text-base m-auto font-semibold bg-green-400 rounded-lg w-[193px] h-[49.18px] lg:mt-[30px] mt-[20px]">
          Save
        </button>
      </form>
    </div>
  );
}

export default BuyerLogin;
