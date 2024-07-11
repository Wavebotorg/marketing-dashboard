"use client";

import React from "react";
import { AdvancedChart } from "react-tradingview-embed";
// import { AdvancedChart, TickerTape } from "react-tradingview-embed";

const Security = () => {
  return (
    <>
      <div className="mt-10">
        <div className="bg-[#1C1C1C] shadow-2xl rounded-lg py-6">
          <div className="mx-auto w-full max-w-7xl">
            <div>
              {/*        <div className="inputDiv ">
                <TickerTape widgetProps={{}} />
              </div> */}
              <AdvancedChart
                // widgetProps={{
                //   interval: "1D", // Example interval setting
                //   theme: "dark", // Example theme setting
                //   symbol: "NASDAQ:AAPL", // Example symbol setting
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;

/* import React from "react";

const Security = () => {
  return (
    <>
      <div>
        <div>
          <div className="bg-[#1C1C1C] shadow-2xl rounded-lg mt-10 p-5">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-4xl text-primary-600 text-primary-500">
                  Security Page
                </h1>
                <p className="mb-4 text-4xl tracking-tight font-bold  md:text-4xl text-white">
                  Comming Soon!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
 */
