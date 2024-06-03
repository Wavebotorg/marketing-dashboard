/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

const TokenList = ({ tokens = [], clickedTokens, selectToken, searchTerm }) => {
  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      {filteredTokens.map((token, index) => (
        <div
          key={index}
          className={`flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer ${
            clickedTokens.includes(token.name)
              ? "opacity-50 "
              : ""
          }`}
          onClick={() => {
         {
              selectToken(token);
            }
          }}
        >
          <img
            src={token.logoURI}
            alt={token.name}
            height={50}
            width={50}
            className="rounded-full"
          />
          <div className="flex gap-2">
            <p
              className={`font-semibold ${clickedTokens.includes(token.name) ? "opacity-50" : ""}`}
            >
              {token.name}
            </p>
            <p className="text-gray-200">({token.symbol.toUpperCase()})</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TokenList;
