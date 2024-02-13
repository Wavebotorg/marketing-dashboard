import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Referral = () => {
  return (
    <>
      <p className="text-blue-400 text-3xl md:text-4xl font-medium max-w-screen-lg ">
        Referral Rewards
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-5">
        <div className="rounded-lg p-4 bg-[#1C1C1C] flex items-center gap-2">
          <IoIosInformationCircleOutline size={20} className="mt-[2px]" />
          <p>Paginated Results</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-5">
        <div className="rounded-lg p-4 bg-[#1C1C1C]">
          <p>Total Referrals</p>
          <p className="text-blue-400 text-2xl mt-1">--</p>
        </div>
        <div className="rounded-lg p-4 bg-[#1C1C1C] ">
          <p>Transactions</p>
          <p className="text-blue-400 text-2xl mt-1">--</p>
        </div>
        <div className="rounded-lg p-4 bg-[#1C1C1C] ">
          <p>Total Rewards</p>
          <p className="text-blue-400 text-2xl mt-1">--ETH</p>
        </div>
        <div className="rounded-lg p-4 bg-[#1C1C1C] ">
          <p>Claimable Rewards</p>
          <p className="text-blue-400 text-2xl mt-1">--ETH</p>
        </div>
      </div>
      <div className="font-medium text-2xl mt-7">
        <p>Referral Reward History</p>
      </div>
      {/*    <div className="mt-6 ">
        <table className="w-full bg-[#1C1C1C]">
          <thead>
            <tr>
              <th className="w-1/6">Snapshot Block</th>
              <th className="w-1/6">Time</th>
              <th className="w-1/6">Rewards</th>
              <th className="w-1/6">Unlock</th>
              <th className="w-1/6">Status</th>
            </tr>
          </thead>
          <tbody>
            <td className="w-1/6">1</td>
            <td className="w-1/6">2</td>
            <td className="w-1/6">3</td>
            <td className="w-1/6">4</td>
            <td className="w-1/6">5</td>
          </tbody>
        </table>
      </div> */}

      <div className="mt-6 ">
        <div className="grid grid-cols-5 bg-[#1C1C1C]">
          <div className="px-4 py-2 ">Snapshot Block</div>
          <div className="px-4 py-2 ">Time</div>
          <div className="px-4 py-2 ">Rewards</div>
          <div className="px-4 py-2 ">Unlock</div>
          <div className="px-4 py-2 ">Status</div>

          {/* Add more rows as needed */}
          <div className="px-4 py-2 ">Value 1</div>
          <div className="px-4 py-2 ">Value 2</div>
          <div className="px-4 py-2 ">Value 3</div>
          <div className="px-4 py-2 ">Value 4</div>
          <div className="px-4 py-2 ">Value 5</div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <div>
          <label>Rows per page </label>
          <select
            name="select Row"
            className="bg-blue-500 rounded-lg p-1"
            defaultValue="Show 5"
          >
            <option value="Show 1">Show 1</option>
            <option value="Show 2">Show 2</option>
            <option value="Show 3">Show 3</option>
            <option value="Show 4">Show 4</option>
            <option value="Show 5">Show 5</option>
          </select>
          <label> 1 of 5</label>
        </div>
      </div>
    </>
  );
};

export default Referral;
