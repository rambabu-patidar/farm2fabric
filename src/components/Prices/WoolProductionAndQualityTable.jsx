import React from "react";

const WoolProductionAndQualityTable = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-semibold">
        Wool Production and Quality in Different Regions of India
      </h1>
      <div className="flex justify-center mt-4">
        <table className="table-auto mt-4">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Particulars</th>
              <th className="border border-gray-400 px-4 py-2">North</th>
              <th className="border border-gray-400 px-4 py-2">North Western</th>
              <th className="border border-gray-400 px-4 py-2">Southern Temperature</th>
              <th className="border border-gray-400 px-4 py-2">Eastern Peninsular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Sheep population (million)</td>
              <td className="border border-gray-400 px-4 py-2">20.36</td>
              <td className="border border-gray-400 px-4 py-2">3.45</td>
              <td className="border border-gray-400 px-4 py-2">19.80</td>
              <td className="border border-gray-400 px-4 py-2">4.6</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Percent contribution</td>
              <td className="border border-gray-400 px-4 py-2">42.23%</td>
              <td className="border border-gray-400 px-4 py-2">7.15%</td>
              <td className="border border-gray-400 px-4 py-2">41.07%</td>
              <td className="border border-gray-400 px-4 py-2">9.54%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Wool production (m.kg)</td>
              <td className="border border-gray-400 px-4 py-2">25.11</td>
              <td className="border border-gray-400 px-4 py-2">4.03</td>
              <td className="border border-gray-400 px-4 py-2">7.68</td>
              <td className="border border-gray-400 px-4 py-2">1.57</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Percent contribution to total
              </td>
              <td className="border border-gray-400 px-4 py-2">65.40%</td>
              <td className="border border-gray-400 px-4 py-2">10.50%</td>
              <td className="border border-gray-400 px-4 py-2">20.00%</td>
              <td className="border border-gray-400 px-4 py-2">4.10%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Per capita production (kg)</td>
              <td className="border border-gray-400 px-4 py-2">1.23</td>
              <td className="border border-gray-400 px-4 py-2">1.16</td>
              <td className="border border-gray-400 px-4 py-2">0.38</td>
              <td className="border border-gray-400 px-4 py-2">0.34</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Fineness (micron)</td>
              <td className="border border-gray-400 px-4 py-2">30.45</td>
              <td className="border border-gray-400 px-4 py-2">22.3</td>
              <td className="border border-gray-400 px-4 py-2">40.60</td>
              <td className="border border-gray-400 px-4 py-2">50-60</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Medullation (%)</td>
              <td className="border border-gray-400 px-4 py-2">30.80%</td>
              <td className="border border-gray-400 px-4 py-2">5.15%</td>
              <td className="border border-gray-400 px-4 py-2">60.80%</td>
              <td className="border border-gray-400 px-4 py-2">80-90%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Burr content (%)</td>
              <td className="border border-gray-400 px-4 py-2">2-5%</td>
              <td className="border border-gray-400 px-4 py-2">2-8%</td>
              <td className="border border-gray-400 px-4 py-2">Below 5%</td>
              <td className="border border-gray-400 px-4 py-2">1-3%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Yield (washed) (%)</td>
              <td className="border border-gray-400 px-4 py-2">80-90%</td>
              <td className="border border-gray-400 px-4 py-2">50-60%</td>
              <td className="border border-gray-400 px-4 py-2">80-90% (except Nilgiri)</td>
              <td className="border border-gray-400 px-4 py-2">85-90%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WoolProductionAndQualityTable;
