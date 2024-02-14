import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Holder = () => {
  return (
    <>
      <p className="text-blue-400 text-3xl md:text-4xl font-medium max-w-screen-lg ">
        Holder Rewards
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-5  ">
        <div className="rounded-lg p-4 bg-[#1C1C1C] flex items-center gap-2  md:w-full w-52 ">
          <IoIosInformationCircleOutline size={20} className="mt-[2px]" />
          <p>Paginated Results</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-5 md:w-full w-52">
        <div className="rounded-lg p-4 bg-[#1C1C1C] ">
          <p>Total Rewards</p>
          <p className="text-blue-400 text-2xl mt-1">0ETH</p>
        </div>
        <div className="rounded-lg p-4 bg-[#1C1C1C] ">
          <p>Unclaimed Rewards</p>
          <p className="text-blue-400 text-2xl mt-1">0ETH</p>
        </div>
        <div className="rounded-lg p-4 bg-[#1C1C1C] ">
          <p>Claimable Rewards</p>
          <p className="text-blue-400 text-2xl mt-1">0ETH</p>
        </div>
      </div>
      <div className="font-medium text-2xl mt-7">
        <p>Holder Rewards</p>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-28 py-1">1</td>
              <td className="px-28 py-1">2</td>
              <td className="px-28 py-1">3</td>
              <td className="px-28 py-1">4</td>
              <td className="px-28 py-1">5</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*  <div className="mt-6 ">
        <div className="grid grid-cols-5 bg-[#1C1C1C]">
          <div className="px-4 py-2 ">Snapshot Block</div>
          <div className="px-4 py-2 ">Time</div>
          <div className="px-4 py-2 ">Rewards</div>
          <div className="px-4 py-2 ">Unlock</div>
          <div className="px-4 py-2 ">Status</div>

          {/* Add more rows as needed *
          <div className="px-4 py-2 ">Value 1</div>
          <div className="px-4 py-2 ">Value 2</div>
          <div className="px-4 py-2 ">Value 3</div>
          <div className="px-4 py-2 ">Value 4</div>
          <div className="px-4 py-2 ">Value 5</div>
        </div>
      </div> */}

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

export default Holder;

{
  /*  <div class="grid-flow-row flex justify-between bg-[#1C1C1C] mt-6 ">
  <span class="flex-1">
    <strong>Snapshot Block</strong>
  </span>
  <span class="flex-1">
    <strong>Time</strong>
  </span>
  <span class="flex-1">
    <strong>Rewards</strong>
  </span>
  <span class="flex-1">
    <strong>Unlock</strong>
  </span>
  <span class="flex-1">
    <strong>Status</strong>
  </span>
</div>

*/
}

{
  /* <div className="grid grid-cols-5 ">
<div className="px-4 py-2 ">Snapshot Block</div>
  <div className="px-4 py-2 ">Time</div>
  <div className="px-4 py-2 ">Rewards</div>
  <div className="px-4 py-2 ">Unlock</div>
  <div className="px-4 py-2 ">Status</div>

  {/* Add more rows as needed *
  <div className="px-4 py-2 ">Value 1</div>
  <div className="px-4 py-2 ">Value 2</div>
  <div className="px-4 py-2 ">Value 3</div>
  <div className="px-4 py-2 ">Value 4</div>
  <div className="px-4 py-2 ">Value 5</div>
</div> */
}

{
  /*    <span>0</span>
  <span>AaronKris</span>
  <span>Philippines</span>
  <span>1991-05-23T14:19:51</span>
  <span>Ophelia_Mitchell@karley.name</span>
  <span>1</span>
  <span>SimeonMcLaughlin</span>
  <span>Singapore</span>
  <span>2012-03-07T00:08:36</span>
  <span>Sabrina_Barton@torey.net</span>
  <span>2</span>
  <span>Kelsie Shanahan</span>
  <span>Brazil</span>
  <span>1985-03-10T20:13:04</span>
  <span>Karianne@salvatore.biz</span> */
}
{
  /* </div> */
}
