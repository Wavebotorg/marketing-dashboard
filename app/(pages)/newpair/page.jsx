import React from 'react'
import { FaSlidersH } from "react-icons/fa";
const NewPair = () => {
  return (
    <div className="2xl:pl-64 xl:pl-64 md:pl-6 lg:pl-[4.8rem] sm:pl-4 xsm:pl-0 mx-auto h-full ">
      <div className="text-white xl:ml-[8rem] xl:mr-[92px] lg:ml-1 lg:mr-4 md:ml-1 md:mr-6  ml-5 mr-5 ">
          New Token Pairs in the last 24-hours updated in real-time.
           <div>
            <button>
            <FaSlidersH />
                Filter
            </button>
           </div>
       
        </div>
        </div>
  )
    
}

export default NewPair