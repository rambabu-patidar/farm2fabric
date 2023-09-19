function ShopHeader() {
    return (
        <div className="ml-4 md:mr-20 md:ml-20 mt-10 flex flex-row items-center justify-between mr-2">
            <div className="">
                <p className="font-inter font-semibold text-sm text-[#1B2124]">
                    Home &gt;<span className="text-green-400"> Raw Sheep Wool</span>
                </p>
            </div>
            <div>
                <label className="mr-2 font-inter font-semibold text-base text-[#575757]">
                    Sort By:{' '}
                </label>
                <select
                    className="w-36 focus-visible:border-[#DCDCDC] md:w-48 h-10 font-inter font-semibold text-sm md:text-base border-2 border-solid border-[#DCDCDC] text-[#333333]"
                    name="sort"
                >
                    <option
                        className="font-inter text-[#1B2124] font-medium text-base "
                        value="latest"
                    >
                        Latest
                    </option>
                    <option
                        className="font-inter text-[#1B2124] font-medium text-base "
                        value="low-price"
                    >
                        Price: Low To High
                    </option>
                    <option
                        className="font-inter text-[#1B2124] font-medium text-base "
                        value="high-price"
                    >
                        Price: High To Low
                    </option>
                    <option
                        className="font-inter text-[#1B2124] font-medium text-base "
                        value="rating"
                    >
                        Rated High
                    </option>
                </select>
            </div>
        </div>
    );
}

export default ShopHeader;
