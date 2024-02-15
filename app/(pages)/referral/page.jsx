import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Referral = () => {
  return (
    <>
    <div className="container">
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
     
      <div className="mt-6">
        <table className="w-full bg-[#1C1C1C]">
          <thead>
            <tr>
              <th className="w-1/6">Snapshot Block</th>
              <th className="w-1/6">Time</th>
              <th className="w-1/6">Rewards</th>
              <th className="w-1/6">Unlock</th>
              <th className="w-1/6">Status</th>
              <th className="w-1/6">Status</th>
              <th className="w-1/6">Status</th>
            </tr>
          </thead>
          {/*  <tbody>
            <tr>
              <td className="px-16 py-1">value 1</td>
              <td className="px-16 py-1">value 2</td>
              <td className="px-16 py-1">value 3</td>
              <td className="px-16 py-1">value 4</td>
              <td className="px-16 py-1">value 5</td>
            </tr>
          </tbody> */}
        </table>
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
      </div>
    </>
  );
};

export default Referral;
