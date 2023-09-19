/* eslint-disable react/prop-types */
function FilterCheckbox({ filterName }) {
    return (
        <div className="mb-1">
            <input
                className="w-4 h-4 border-2 border-solid border-gray-700 mr-3.5 accent-green-400"
                type="checkbox"
            />
            <label
                className="text-sm text-[#1B2124] font-medium leading-4 font-gilroy"
                htmlFor="S"
            >
                {filterName}
            </label>
        </div>
    );
}

export default FilterCheckbox;
