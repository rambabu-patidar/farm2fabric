/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import FilterCheckbox from './FilterCheckbox';

function FilterItem({ filterTitle, filterItems }) {
    return (
        <div className="ml-6 mt-[25px]">
            <div className="font-inter font-semibold text-sm">
                {filterTitle}
            </div>
            <div className="mt-3.5">
                {filterItems.map((item) => (
                    <FilterCheckbox filterName={item} />
                ))}
            </div>
        </div>
    );
}

export default FilterItem;
