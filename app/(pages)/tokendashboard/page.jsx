"use client";
import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const TokenDashboard = () => {
  return (
    <>
      <div className="container">
        <p className="text-blue-400 text-3xl md:text-4xl font-medium max-w-screen-lg ">
          Revenue Share Dashboard
        </p>
        <div className="flex flex-col md:flex-row  md:justify-center md: items-center gap-6 mt-5 lg:justify-start">
          <div className="rounded-lg p-4 bg-[#1C1C1C] flex items-center gap-2 md:w-full w-52 lg:w-64">
            <IoIosInformationCircleOutline size={20} />
            <p>Rewards Forfeiture</p>
          </div>
          <div className="rounded-lg p-4 bg-[#1C1C1C] flex items-center gap-2 md:w-full w-52 lg:w-64">
            <IoIosInformationCircleOutline size={20} />
            <p>Paginated Results</p>
          </div>
        </div>
        <div className="md:p-4 sm:mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="font-medium text-2xl">
              <p>Token Holdings</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row justify-center md:justify-end mt-4 md:mt-0 gap-3">
              <div>
                <button className="rounded-lg bg-blue-500 p-1">
                  Claim Wave
                </button>
              </div>
              <div>
                <button className="rounded-lg bg-blue-500 p-1">
                  Claim ETH
                </button>
              </div>
              <div>
                <button className="rounded-lg bg-blue-500 p-1">
                  Claim SOL
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Wallet:"
            className="bg-[#1C1C1C] rounded-lg p-3 w-full"
          />
        </div>

        <div className="mt-3">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="AUTO-COMPOUND:"
            className="bg-[#1C1C1C] rounded-lg p-3 w-full"
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="font-medium text-2xl">
            <p>Claimed Rewards</p>
          </div>
          <div>
            <button className="rounded-lg bg-blue-500 p-1">
              Claim Rewards
            </button>
          </div>
        </div>

        <div className="mt-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-1/6">Time</th>
                <th className="w-1/6">Amount (ETH)</th>
                <th className="w-1/6">Min Amount (wave)</th>
                <th className="w-1/6">Amount (SOL)</th>
                <th className="w-1/6">Status</th>
                <th className="w-1/6">Transaction</th>
              </tr>
            </thead>
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

export default TokenDashboard;

