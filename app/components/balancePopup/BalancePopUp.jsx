import React from "react";
import { RxCross1 } from "react-icons/rx";
export default function BalancePopUp({
  setBalancePopup,
  balancePopup,
  showBalance,
  selectedNetwork,
}) {
  console.log("🚀 ~ showBalance:", showBalance);
  return (
    <div
      className={`${
        balancePopup ? "scale-1" : "scale-0"
      } transition-all ease-in-out !duration-300 h-[350px] overflow-y-auto rounded-lg w-[300px] p-3 shadow-sm !shadow-blue-500 bg-[#1e2529] ms-10 md:ms-0`}
      onClick={(e) => e?.stopPropagation()}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-[20px] text-[#979797] font-bold">Tokens</h1>
        <button
          className="text-[25px]"
          onClick={() => {
            setBalancePopup(false);
          }}
        >
          <RxCross1 className="!text-[#979797]" />
        </button>
      </div>
      {showBalance?.length > 0 ? (
        showBalance?.map((item, index) => (
          <div className="flex items-center mt-5" key={index}>
            <div className="flex">
              <img
                src={item?.logo}
                alt={item?.name || "Token"}
                height={30}
                width={30}
                className="h-15 w-15 my-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "fallback-image-url";
                }} // optional fallback image
              />
              <div className="flex flex-col justify-center pl-3">
                <div className="text-base font-bold">{item?.name}</div>
                <div className="text-base">
                  Balance:{" "}
                  <span className="font-bold">
                    {selectedNetwork === "Solana"
                      ? Number(item?.amount)?.toFixed(3)
                      : Number(item?.balance_formatted)?.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-16 text-xl">No data</div>
      )}
    </div>
  );
}
