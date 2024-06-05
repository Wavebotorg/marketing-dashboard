/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

const  TokenSellList = ({  clickedTokens, selectToken, searchTerm , showBalance=[] ,}) => {
  const filteredTokens = showBalance.filter((token) =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      {filteredTokens?.length > 0 ? (
                 filteredTokens?.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer ${
                        clickedTokens.includes(item.name)
                   
                      }`}
                      onClick={() => {
                       {
                          selectToken(item);
                        }
                      }}
                    >
                      <img
                        src={item.logo}
                        alt={item.name || "Token"}
                        height={30}
                        width={30}
                        className="h-15 w-15 my-3 rounded-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "fallback-image-url";
                        }}
                      />
                      <div className="flex flex-col justify-center">
                        <div className="text-base font-bold">{item.name}</div>
                        <div className="text-base font-bold">{item.symbol}</div>
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
                  ))
                ) : (
                  <div className="mt-16 text-xl">No data</div>
                )}
    </>
  );
};

export default TokenSellList;