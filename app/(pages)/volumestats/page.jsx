import React from "react";

const Volumestats = () => {
  return (
    <div className="container 2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
      <div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-4xl text-primary-600 text-primary-500">
            Volume Stats Page
            </h1>
            <p className="mb-4 text-4xl tracking-tight font-bold  md:text-4xl text-white">
              Comming Soon!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volumestats;
/* ("use client");
import React, { useState, useEffect } from "react";

const Volumestats = ({ coinId }) => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const axios = require("axios");

    const getUserData = async () => {
      try {
        const coinpaprikaResponse = await axios.get(
          "https://api.coinpaprika.com/v1/tickers"
        );
        const coingeckoResponse = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&page=1&per_page=250&order=market_cap_desc&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en"
        );

        const coinpaprikaData = coinpaprikaResponse.data;
        const coingeckoData = coingeckoResponse.data;

        // Create a map of symbols to images from Coingecko
        const symbolImageMap = coingeckoData.reduce((acc, coin) => {
          acc[coin.symbol.toLowerCase()] = coin.image;
          return acc;
        }, {});

        // Merge Coinpaprika data with images from Coingecko based on case-insensitive symbol matching
        const mergedData = coinpaprikaData.map((coin) => ({
          ...coin,
          image: symbolImageMap[coin.symbol.toLowerCase()] || null, // Use image from Coingecko or null if not found
        }));

        // Do something with merged data, like setting state or logging
        console.log("Merged data:", mergedData);
        // setAllCoinData(mergedData); // Assuming setAllCoinData is a function to set state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getUserData();
  }, []);

  if (!coinData) {
    return <div>Loading...</div>;
  }

const page = () => {
  return (
    <div className="2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
      <div className="  xl:ml-28 xl:mr-[90px]  gap-6 lg:ml-3 lg:mr-6 md:ml-0 md:mr-6 ml-5  mr-5"></div>
    </div>
  );
};

export default Volumestats;
 */
