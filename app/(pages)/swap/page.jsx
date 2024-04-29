"use client";
import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdSettings } from "react-icons/io";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSwapVerticalOutline } from "react-icons/io5";
//import eth from "../../components/assets/ethlogo.png";
import axios from "axios";
// import AllToken from "./alltoken.json";
const Swap = () => {
    const [tokendata, setTokendata] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedtofrom, setSelectedtofrom] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTokenDatato, setSelectedTokenDatato] = useState({
        name_to: "",
        image_to: "",
        price_to: "",
        input_to: "" || 0,
        name_from: "",
        image_from: "",
        input_from: "" || 0,
        price_from: "",
    });

    const Tokendata = tokendata
    //console.log(selectedTokenDatato);

    const selectToken = (e) => {
        if (selectedtofrom === 1) {
            setSelectedTokenDatato({
                ...selectedTokenDatato,
                name_to: e.symbol,
                image_to: e.image,
                price_to: e.current_price,
            });
            setShowPopup(false);
        }
        if (selectedtofrom === 2) {
            setSelectedTokenDatato({
                ...selectedTokenDatato,
                name_from: e.symbol,
                image_from: e.image,
                price_from: e.current_price,
            });
            setShowPopup(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
                );

                console.log("jsonData--->", response?.data);
                setTokendata(response?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSwapTokens = () => {
        //setSelectedToken((prevToken) => (prevToken === "one" ? "two" : "one"));
        setSelectedTokenDatato({
            ...selectedTokenDatato,
            name_to: selectedTokenDatato?.name_from,
            image_to: selectedTokenDatato?.image_from,
            price_to: selectedTokenDatato?.price_from,
            name_from: selectedTokenDatato?.name_to,
            image_from: selectedTokenDatato?.image_to,
            price_from: selectedTokenDatato?.price_to,
            input_to: selectedTokenDatato?.input_from,
            input_from: selectedTokenDatato?.input_to,
        });
    };

    const tokenpopup = (e) => {
        setShowPopup(true);
        setSelectedtofrom(e);
        setSearchTerm("");
    };

    const inputValue = ({ value, name }) => {
        //console.log("🚀 ~ inputValue ~ value:", value);
        const Invalue = value;

        if (name === "to") {
            const fromValue =
                (selectedTokenDatato.price_to * Invalue) /
                selectedTokenDatato.price_from;
            setSelectedTokenDatato({
                ...selectedTokenDatato,
                input_to: Invalue,
                input_from: isNaN(fromValue) ? "" : fromValue,
            });
        } else if (name === "from") {
            const fromValue =
                (selectedTokenDatato.price_from * Invalue) /
                selectedTokenDatato.price_to;
            setSelectedTokenDatato({
                ...selectedTokenDatato,
                input_from: Invalue,
                input_to: isNaN(fromValue) ? "" : fromValue,
            });
        }
    };

    useEffect(() => {
        setSelectedTokenDatato({
            ...selectedTokenDatato,
            input_from:
                (selectedTokenDatato?.price_to * selectedTokenDatato?.input_to) /
                selectedTokenDatato?.price_from || 0,
        });
    }, [selectedTokenDatato?.price_from, selectedTokenDatato?.price_to]);

    return (
        <>
            <div className="lg:ml-80 mt-24 space-y-10 px-5 ">
                <div className="text-2xl font-semibold">
                    <p>Swap</p>
                </div>

                <div className="swap flex flex-col items-center justify-between   text-white ">
                    <div className="flex flex-col justify-center items-center space-y-5">
                        <div className="flex flex-col bg-slate-600 bg-opacity-10 p-3  rounded-lg shadow-lg  space-y-2">
                            <div className="flex justify-between items-center py-2">
                                <div className="flex gap-5 text-lg mx-1">
                                    <h1>Swap</h1>
                                    <h1>Buy</h1>
                                </div>
                                <div
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <IoMdSettings
                                        size={25}
                                        className={isHovered ? "rotate-90 cursor-pointer" : ""}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col bg-slate-400 bg-opacity-10 rounded-lg p-5">
                                <div className="text-gray-300">
                                    <p>You pay</p>
                                </div>
                                <div className="flex justify-between py-2">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            className="border-none bg-transparent w-32 md:w-auto overflow-hidden outline-none text-2xl "
                                            placeholder="0"
                                            name="to"
                                            value={selectedTokenDatato?.input_to}
                                            onChange={(e) => {
                                                inputValue(e?.target);
                                            }}
                                        />
                                    </div>
                                    {/*{swap 1}*/}
                                    <div
                                        className="bg-gray-600 bg-opacity-50 cursor-pointer flex justify-center items-center px-2 py-1 gap-2 rounded-full "
                                        onClick={() => tokenpopup(1)}
                                    >
                                        <div>
                                            {selectedTokenDatato?.image_to ? (
                                                <Image
                                                    src={selectedTokenDatato?.image_to}
                                                    height={30}
                                                    width={30}
                                                    alt="logo"
                                                    className="rounded-full"
                                                />
                                            ) : null}
                                        </div>
                                        <div>
                                            {selectedTokenDatato?.name_to
                                                ? selectedTokenDatato?.name_to.toUpperCase()
                                                : "Select Token"}
                                        </div>
                                        <div>
                                            <MdKeyboardArrowDown size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-center items-center bg-gray-600 bg-opacity-50 text-white  p-2 mx-auto rounded-md cursor-pointer"
                                onClick={() => handleSwapTokens()}
                            >
                                <IoSwapVerticalOutline size={20} className="" />
                            </div>
                            <div className="flex flex-col bg-slate-400 bg-opacity-10 rounded-lg p-5">
                                <div className="text-gray-300">
                                    <p>You receive</p>
                                </div>
                                <div className="flex justify-between py-2">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            className="border-none bg-transparent w-32 md:w-auto overflow-hidden outline-none text-2xl "
                                            placeholder="0"
                                            name="from"
                                            value={selectedTokenDatato?.input_from}
                                            onChange={(e) => {
                                                inputValue(e?.target);
                                            }}
                                        />
                                    </div>
                                    {/*{swap 2}*/}
                                    <div
                                        className="bg-gray-600 bg-opacity-50 cursor-pointer flex justify-center items-center px-2 py-1 gap-2 rounded-full "
                                        onClick={() => tokenpopup(2)}
                                    >
                                        <div>
                                            {selectedTokenDatato?.image_from ? (
                                                <Image
                                                    src={selectedTokenDatato?.image_from}
                                                    height={30}
                                                    width={30}
                                                    alt="logo"
                                                    className="rounded-full"
                                                />
                                            ) : null}
                                        </div>
                                        <div>
                                            {selectedTokenDatato?.name_from
                                                ? selectedTokenDatato?.name_from.toUpperCase()
                                                : "Select Token"}
                                        </div>
                                        <div>
                                            <MdKeyboardArrowDown size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="w-full">
                                <button
                                    className={` px-3 py-2 w-full rounded-md text-xl bg-indigo-600 ${selectedTokenDatato?.input_from
                                            ? " bg-opacity-50"
                                            : "bg-opacity-10"
                                        }`}
                                >
                                    Swap
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#1c1c1c] shadow-blue-700 shadow-sm p-3 rounded-2xl w-[45vh] ">
                        <div className=" space-y-5">
                            <div className="flex justify-between items-center py-2 ">
                                <div className="text-xl">Select Token</div>
                                <div
                                    onClick={() => setShowPopup(false)}
                                     className="cursor-pointer">
                                    <IoMdClose size={24} />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    className="w-full bg-transparent border border-zinc-500 text-white rounded-lg p-2 mb-4 outline-none"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        {Tokendata ? <div className="h-[60vh] overflow-y-auto ">
                            {Tokendata?.filter((token) =>
                                token.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map((token, index) => (
                                <div
                                    key={index}
                                    className="flex gap-3 justify-start items-center mx-5 py-2 cursor-pointer"
                                    onClick={() => selectToken(token)}
                                >
                                    <Image
                                        src={token.image}
                                        alt={token.name}
                                        height={50}
                                        width={50}
                                        className="rounded-full"
                                    />
                                    <div className="flex gap-2">
                                        <p className="font-semibold">{token.name} </p>
                                        <p className="text-gray-200">
                                            ({token.symbol.toUpperCase()})
                                        </p>
                                    </div> 
                                </div>
                            ))}
                        </div> : null}

                    </div>
                </div>
            )}
        </>
    );
};

export default Swap;