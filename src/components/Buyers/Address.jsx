import React from "react";
import { states } from "./states";

function Address({ formState, handleChange }) {
  return (
    <div>
      <div className="mb-2">
        <label className="text-[#252525] text-base font-medium tracking-[0.035em]">
          Address Line
        </label>
        <input
          type="text"
          name="address"
          value={formState.address}
          onChange={handleChange}
          className="block w-full h-[48px] py-3 px-1 outline-none bg-[#FFFFFF] gap-2 rounded-[10px] mt-1 mb-1 border border-[#252525]"
        />
      </div>
      <div className="md:flex block gap-2">
        <div className="mb-2">
          <label className="text-[#252525]  text-base  font-medium tracking-[0.035em]">
            City
          </label>
          <input
            type="text"
            name="district"
            value={formState.district}
            onChange={handleChange}
            className="block w-full  h-[48px] py-3 px-1 outline-none bg-[#FFFFFF] gap-2 rounded-[10px] mt-1 mb-1 border border-[#252525]"
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium tracking-[0.035em]">
            State
          </label>
          <select
            className="h-12 mt-1 border-[0.1px] border-[#232323] rounded-[10px]"
            defaultValue="Andaman and Nicobar Islands"
            inputProps={{ "aria-label": "Without label" }}
            displayEmpty
            name="state"
            value={formState.state}
            onChange={handleChange}
          >
            {states.map((state) => (
              <option key={state.code} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-2">
        <label className="text-[#252525] text-base  font-medium tracking-[0.035em]">
          GST Number
        </label>
        <input
          type="number"
          name="gst_no"
          onChange={handleChange}
          value={formState.gst_no}
          className="block w-full  h-[48px] py-3 px-1 outline-none bg-[#FFFFFF] gap-2 rounded-[10px] mt-1 mb-1 border border-[#252525]"
        />
      </div>
    </div>
  );
}

export default Address;
