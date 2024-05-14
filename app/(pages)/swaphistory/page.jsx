
// "use client"
// import React,{useState,useEffect} from 'react'
// // import { useWallet } from "../../components/contexts/WalletContext";
// import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth"

// const SwapHistory = () => {
//   // const {  email } = useWallet();
//   const [evmTransaction, setEvmTransaction] = useState([])
//   const [soalnaTransaction,setSoalnaTransaction] = useState([])
//   const [showEvm, setShowEvm] = useState(false);

//   const getEvmTransaction = async () => {
//     await axiosInstanceAuth
//       .get("/evmTransactions")
//       .then((res) => {
//         const myData = res?.data?.transactions 
//         setEvmTransaction(myData);
//         setSolanaTransaction([]); 
//         setShowEvm(true); 
//         console.log("evmtrasanction---->", myData);
//       })
//       .catch((err) => {
//         console.log("err --->", err);
//       });
//   };
//   const getSolanaTransaction = async () => {
//     await axiosInstanceAuth
//       .get("/solanaTransactions")
//       .then((res) => {
//         const myData = res?.data?.transactions 
//         setSoalnaTransaction(myData);
//         setEvmTransaction([]);
//         setShowEvm(false);
//         console.log("solanatransaction---->", myData);
//       })
//       .catch((err) => {
//         console.log("err --->", err);
//       });
//   };
//   useEffect(() => {
//     // Fetch Solana transactions whenever EVM transactions are fetched
  
//     getEvmTransaction();
//   }, []); 
//   return (
//     <div className="2xl:pl-60 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
//        <div className='mt-10'> 
//         <button onClick={ getEvmTransaction} className='bg-blue-500 rounded-lg  px-2 mr-4'>Evm</button>
      
//         <button onClick={ getSolanaTransaction} className='bg-blue-500 rounded-lg  px-2 '>Solana</button>
//       </div>
//          <div className="mt-4 hidden lg:block ">
//           <div className="rounded-lg">
//             <div className="bg-[#1C1C1C]  text-white h-auto  overflow-auto rounded-lg">
//               <table className="w-full  ">
//                 <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl ">
//                   <tr className=" text-[#CECECE]  ">
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium  "
//                     >
//                      Amount
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                       Transaction Hash{" "}
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                     createdAt
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium   whitespace-nowrap"
//                     >
//                     updatedAt
//                     </th>
//                     {/* <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-base font-medium  whitespace-nowrap"
//                     >
//                       Status
//                     </th> */}
//                   </tr>
//                 </thead>
               
//                 <tbody>
//                   {
//               showEvm && evmTransaction?.map((d, index) => (
//                       <>
//                         <tr key={index} >
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
//                             <div> {d?.amount}</div>
//                           </td>
//                           {/* <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {d?.txid}
//                           </td> */}

//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             <div className="flex items-center justify-center gap-5">
//                               <div>{d?.createdAt} </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {d?.updatedAt}
//                           </td>
                          
//                         </tr>
//                       </>
//                     ))}

//                 {
//                  !showEvm && soalnaTransaction?.map((e, index) => (
//                       <>
//                         <tr key={index} >
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white ">
//                             <div> {e?.amount}</div>
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {e?.txid}
//                           </td>

//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             <div className="flex items-center justify-center gap-5">
//                               <div>{e?.createdAt} </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white ">
//                             {e?.updatedAt}
//                           </td>
                          
//                         </tr>
//                       </>
//                     ))}
//                 </tbody>
                
//               </table>
//             </div>
//           </div>
//         </div>
       
    

//        </div>
    
   
 
//   )
// }

// export default SwapHistory

"use client"
import React, { useState ,useEffect} from 'react';
import axiosInstanceAuth from "../../apiInstances/axiosInstanceAuth";
import { useSearch } from "../../components/contexts/SearchContext";
import Pagination from "../Pagination/Pagination";
import { MdOutlineContentCopy } from "react-icons/md";
const SwapHistory = () => {

  const [transactions, setTransactions] = useState([]);

   //pagination
   const { searchQuery } = useSearch();
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10;
 
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   //search
   const filteredData = transactions.filter((coin) =>
   coin.txid.toLowerCase().includes(searchQuery.toLowerCase()) ||
   coin.amount && coin.amount.toString().toLowerCase().includes(searchQuery.toLowerCase()));
 
   const visibleData =  filteredData.slice(startIndex, endIndex);
  
  
   const handlePageChange = (page) => {
     setCurrentPage(page);
   };
 
   useEffect(() => {
     setCurrentPage(1)
   }, [searchQuery]);




  //get history data of evm and solana chain
  const getTransactions = async (apiEndpoint) => {
    try {
     
      const response = await axiosInstanceAuth.get(apiEndpoint);
      const data = response?.data?.transactions || [];
      setTransactions(data);
      console.log("dataofalltrasaction===============",data)
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      
    }
  };
  useEffect(() => {
    // Fetch EVM transactions by default when component mounts
    getTransactions("/evmTransactions");
  }, []);

  //for copy id
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
        // You can optionally show a success message or perform any other action here
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
        // You can handle errors here
      });
  };
//for format id
  const formatTransactionID = (txid) => {
    if (txid.length <= 10) return txid; // If the transaction ID is too short, return as is
    const firstSix = txid.slice(0, 6); // Get the first 6 characters
    const lastFour = txid.slice(-4); // Get the last 4 characters
    return `${firstSix}...${lastFour}`; // Concatenate with "..." in between
  };
//for format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return `${formattedDate}, ${formattedTime}`;
  };


  return (
    <div className="2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto ">
    <div className="flex flex-col xl:justify-center xl:ml-16 xl:mr-12 lg:ml-2 lg:mr-5 md:ml-0 xsm:ml-5 mr-5 mt-10">
      <div className='mt-10'> 
        <button onClick={() => getTransactions("/evmTransactions")} className='bg-blue-500 rounded-lg px-2 py-1 mr-4'>Evm</button>
        <button onClick={() => getTransactions("/solanaTransactions")} className='bg-blue-500 rounded-lg px-2 py-1'>Solana</button>
      </div>

      <div className="mt-4 hidden lg:block ">
        <div className="rounded-lg">
          <div className="bg-[#1C1C1C] text-white h-auto overflow-auto rounded-lg">
            <table className="w-full">
              <thead className="sticky top-0 bg-[#1C1C1C] shadow-2xl ">
                <tr className="text-[#CECECE]">
                  <th scope="col" className="px-6 py-3 text-center text-base font-medium">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-base font-medium whitespace-nowrap">
                    Transaction Hash{" "}
                  </th>
                 
                  <th scope="col" className="px-6 py-3 text-center text-base font-medium whitespace-nowrap">
                    CreatedAt
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-base font-medium whitespace-nowrap">
                    UpdatedAt
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-base font-medium whitespace-nowrap">
                   From
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-base font-medium whitespace-nowrap">
                  To
                  </th>
                  
                </tr>
              </thead>
             
              <tbody>
                {visibleData?.map((transaction, index) => (
                  <tr key={`transaction-${index}`}>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-md font-medium text-white">
                    
                      {transaction?.amount}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                    {formatTransactionID(transaction?.txid)}
                    </td>
                    
                    <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                    {formatDate(transaction?.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                    {formatDate(transaction?.updatedAt)}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                    {formatTransactionID(transaction?.from)} 
                    <button
                className="text-xl text-[#828282] align-middle pb-1.5"
                onClick={() => copyToClipboard(transaction?.from)}
              >
                <MdOutlineContentCopy
                  size={12}
                  className="ml-1.5 items-center"
                />
              </button>
                    
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-md text-white">
                    {formatTransactionID(transaction?.to)}
                    <button
                className="text-xl text-[#828282] align-middle pb-1.5"
                onClick={() => copyToClipboard(transaction?.to)}
              >
                <MdOutlineContentCopy
                  size={12}
                  className="ml-1.5 items-center"
                />
              </button>
                    </td>
                  </tr>
           
                ))}
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
             totalItems={filteredData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
        
            currentPage={currentPage}
          />
          {visibleData?.length > 0 &&
         visibleData?.map((d, index) => (
            <div key={index} className="lg:hidden mt-4 ">
              <div className="w-full  mx-auto bg-[#1C1C1C] shadow-md rounded-md ">
                <div className="w-full  ">
                  <div className="">
                    <>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">
                          {" "}
                          Amount
                        </div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                          {d?.amount}
                        </div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold"> Transaction Hash</div>
                        <div className=" py-2 pr-4 pl-4"> {formatTransactionID(d?.txid)}</div>
                      </div>
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">CreatedAt</div>
                        <div className=" py-2 pr-4 pl-4">{formatDate(d?.createdAt)}</div>
                      </div>
                    
                      <div className="border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">UpdatedAt</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4">
                        {formatDate(d?.updatedAt)}
                        </div>
                      </div>
                      <div className=" border-b border-[#494949] flex justify-between">
                        <div className="py-2  pl-4 font-semibold">From</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {formatTransactionID(d?.from)} 
                        </div>
                      </div>
                      <div className=" flex justify-between">
                        <div className="py-2  pl-4 font-semibold">To</div>
                        <div className="flex justify-end items-center py-2 pr-4 pl-4 gap-1.5">
                        {formatTransactionID(d?.to)} 
                        </div>
                      </div>
                      <div></div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
    </div>
  );
};

export default SwapHistory;
