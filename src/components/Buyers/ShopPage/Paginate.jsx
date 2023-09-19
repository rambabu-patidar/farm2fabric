/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function Paginate({ showPage, onPaginationChange, total }) {
    const [counter, setCounter] = useState(1);
    const [numberOfButton, setNumberOfButton] = useState(
        Math.ceil(total / showPage)
    );

    useEffect(() => {
        const value = showPage * counter;
        onPaginationChange(value - showPage, value);
    }, [counter]);
    const onButtonCick = (type) => {
        if (type === 'prev') {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === 'next') {
            if (numberOfButton === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }
        }
    };
    return (
        <ul className="pagination flex justify-center mb-10 pt-[40px]">
            <li className="px-[5px]">
                <button
                    type="button"
                    className="bg-green-300 cursor-pointer flex items-center text-[14px] px-[13px] h-[34px]"
                    style={{
                        display: counter === 1 ? 'none' : 'block',
                    }}
                    onClick={() => onButtonCick('prev')}
                >
                    Prev
                </button>
            </li>

            {new Array(numberOfButton).fill('').map((el, index) => (
                <li className="px-[5px]">
                    <span
                        className="cursor-pointer flex items-center px-[13px] h-[34px] text-[12px] font-medium"
                        style={{
                            background:
                                index + 1 === counter ? '#4ade80' : '#f5f5f5',
                        }}
                        onClick={() => setCounter(index + 1)}
                    >
                        {index + 1}
                    </span>
                </li>
            ))}
            <li className="px-[5px]">
                <button
                    type="button"
                    className="bg-green-300 cursor-pointer flex items-center text-[14px] px-[13px] h-[34px]"
                    style={{
                        display: numberOfButton === counter ? 'none' : 'block',
                    }}
                    onClick={() => onButtonCick('next')}
                >
                    Next
                </button>
            </li>
        </ul>
    );
}

export default Paginate;
