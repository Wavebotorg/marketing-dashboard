"use client";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "react-router-dom";
import { useRouter } from "next/navigation";
import NewPair from "../newpair/page";
import Trending from "../trending/page";
import Image from "next/image";
import Filter from "../../components/Filter/Filter.jsx";
import eth from "../../../public/assets/tokenimg/eth.png";
import arbitrum from "../../../public/assets/tokenimg/arbitrum.png";
import optimism from "../../../public/assets/tokenimg/optimism.png";
import poly from "../../../public/assets/tokenimg/poly.png";
import SOL from "../../../public/assets/tokenimg/SOL.png";
import BNB from "../../../public/assets/tokenimg/BNB.png";
import avalanche from "../../../public/assets/tokenimg/avalanche.png";
import cronos from "../../../public/assets/tokenimg/cronos.jpg";
import fantom from "../../../public/assets/tokenimg/fantom.png";
import { useWallet } from "../../components/contexts/WalletContext";

const Discover = ({ onColor = "bg-purple-500", offColor = "bg-gray-300" }) => {
  const router = useRouter();
  const [selectedpage, setSelectedPage] = useState("newpair");
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");
  const [selectChain, setSelectChain] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const { walletAddress, email, solanaAddress, isNavbar, setIsNavbar } =
    useWallet();

  return (
    <div
      style={{
        marginLeft: isNavbar && window.innerWidth >= 1440 ? "12%" : "0",
      }}
      className=" md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto h-full "
    >
      {/* 2xl:pl-64 xl:pl-64 */}
      <div className="text-white  lg:ml-1 lg:mr-4 md:ml-1 md:mr-6  ml-5 mr-5 ">
        {/* xl:ml-[8rem] xl:mr-[92px] */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-2xl justify-start  text-[#1788FB]  md:text-3xl font-medium max-w-screen-lg ">
            My Portfolio
          </div>
        </div>

        <div className="">
          <div className="mt-6 rounded-lg overflow-auto">
            <div className="bg-[#1C1C1C] h-full overflow-y-auto text-white  overflow-auto rounded-xl p-5 ">
              {/* for with points and recent join user data show */}
              View all tokens you&apos;ve bought or sold through Photon.
              <div className="flex py-2">
                <div className="pr-3">
                  {" "}
                  <Filter />
                </div>
                <div className="flex items-center">
                  <div
                    className={`w-10 h-4 flex items-center rounded-full p-1 cursor-pointer ${
                      isOn ? onColor : offColor
                    }`}
                    onClick={toggleSwitch}
                  >
                    <div
                      className={`bg-white w-5 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                        isOn ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </div>
                  <span className="mx-3 ">Show hidden</span>
                </div>
              </div>
              <table className="w-full">
                <thead className="sticky top-0 leader-color shadow-2xl ">
                  <tr
                    className="  text-[#CECECE]   bg-[#1C1C1C]  "
                    style={{
                      backgroundColor: "rgba(23, 136, 251, 0.26)",
                    }}
                  >
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Pair Info
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Created
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Liquidity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Initial Liquidity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      FDV
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      TXNS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Volume
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Buy/Sell Tax
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Audit Results
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {/* <tbody>
                    {visibleData?.length > 0 ? (
                      visibleData.map((leader, index) => (
                        <tr key={index}>
                          {selectedLeaderboard === "referral" ? (
                            <>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.name}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.email}
                              </td>
                              <td className="px-4 py-4 text-center whitespace-nowrap text-md  text-white">
                                {leader?.referrals}
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.name}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.email}
                              </td>
                              <td className="px-4 py-4 text-center whitespace-nowrap text-md text-white">
                                {leader?.totalTransaction}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                                {Math.floor(leader?.totalTransferToken)}
                               
                              </td>
                            </>
                          )}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-6 py-4 pt-60 font-bold text-lg text-center text-md text-white"
                        >
                          No data found.
                        </td>
                      </tr>
                    )}
                  </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
